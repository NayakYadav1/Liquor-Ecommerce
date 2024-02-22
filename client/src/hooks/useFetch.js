import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState()

    useEffect(() => {
        makeApiCall();
    }, [endpoint]);

    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint)
        setData(res)
    }

    return {data};

}

export default useFetch;

/* import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchDataFromApi(endpoint);
            setData(res);
        };
        fetchData(); // Call the async function immediately

        // Optionally, return a cleanup function if needed
        return () => {
            // Cleanup code here
        };
    }, [endpoint]);

    return { data };
};

export default useFetch;
 */