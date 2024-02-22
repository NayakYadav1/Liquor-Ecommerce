import { MdClose } from "react-icons/md"
// import { Context } from "../../../utils/context"
import "./CartItem.scss";

import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {

    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context)

    return (
        <div className="cart-products">
            {cartItems.map(item => (
                <div key={item.id} className="cart-product">
                    <div className="img-container">
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="Loading" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)} />
                        <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity('dec', item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
                        </div>
                        {/* <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>x</span>
                            <span className="highlight">NPR{item.attributes.price}</span>
                            <span className="highlight">NPR{item.attributes.price * item.attributes.quantity}</span>
                        </div> */}

                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>x</span>
                            <span>{item.attributes.price}</span>
                            <span className="highlight">
                                {(() => {
                                    const quantity = item.attributes.quantity;
                                    let discount = 0;
                                    if (quantity > 24) {
                                        discount = 0.3;
                                    } else if (quantity >= 12) {
                                        discount = 0.1;
                                    } else if (quantity > 6) {
                                        discount = 0.05;
                                    }
                                    const discountedPrice = item.attributes.price * quantity * (1 - discount);
                                    const cartSubTotal = `NPR${discountedPrice.toFixed(2)}`;
                                    return discount > 0 ? `${cartSubTotal} (${discount * 100}% off)` : cartSubTotal;
                                })()}
                            </span>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
};

export default CartItem;
