import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    useEffect(() => {
        let count = 0
        cartItems.map(item => count += item.attributes.quantity)
        setCartCount(count)

        // let subTotal = 0;
        // cartItems.map(item => subTotal += item.attributes.price * item.attributes.quantity)
        // setCartSubTotal(subTotal)

        // let subTotal = 0;

        // cartItems.forEach(item => {
        //     const quantity = item.attributes.quantity;
        //     const price = item.attributes.price;
        //     let discount = 0;
        //     if (quantity > 24) {
        //         discount = 0.3;
        //     } else if (quantity >= 12) {
        //         discount = 0.1;
        //     } else if (quantity > 6) {
        //         discount = 0.05;
        //     }
        //     const discountedPrice = price * quantity * (1 - discount);
        //     subTotal += discountedPrice;
        // });
        // setCartSubTotal(subTotal);

        let subTotal = 0;
        let discountPercentage = 0;
        cartItems.forEach(item => {
            const quantity = item.attributes.quantity;
            const price = item.attributes.price;
            let discount = 0;
            if (quantity > 24) {
                discount = 0.3;
            } else if (quantity >= 12) {
                discount = 0.1;
            } else if (quantity > 6) {
                discount = 0.05;
            }
            const discountedPrice = price * quantity * (1 - discount);
            subTotal += discountedPrice;
            if (discount > 0) {
                discountPercentage = discount * 100;
            }
        });
        const cartSubTotalWithDiscount = `NPR ${subTotal.toFixed(2)}${discountPercentage > 0 ? ` (${discountPercentage}% off)` : ''}`;
        setCartSubTotal(cartSubTotalWithDiscount);


    }, [cartItems])

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems]
        let index = items.findIndex(p => p.id === product.id)
        if (index !== -1) {
            items[index].attributes.quantity += quantity
        } else {
            product.attributes.quantity = quantity
            items = [...items, product]
        }
        setCartItems(items)
    }
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems]
        items = items.filter((p) => p.id !== product.id)
        setCartItems(items)
    }
    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems]
        let index = items.findIndex((p) => p.id === product.id)
        if (type === "inc") {
            items[index].attributes.quantity += 1
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items)
    }

    return (
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
            cartItems,
            setCartItems,
            cartCount,
            setCartCount,
            cartSubTotal,
            setCartSubTotal,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQuantity,
        }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;