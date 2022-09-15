import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import useGetCart from "../src/hooks/useGetCart";
import useGetProducts from "../src/hooks/useGetProducts";

const Home: NextPage = () => {
    const products = useGetProducts();
    const cart = useGetCart();

    return (
        <div>
            <Head>
                <title>Bringmeister Coding Challenge</title>
            </Head>

            <h1>Cart</h1>
            <pre>{JSON.stringify(cart.data?.products.length, null, 4)}</pre>

            <h2>Products</h2>
            <pre>{JSON.stringify(products.data?.pageInfo.totalCount, null, 4)}</pre>
        </div>
    );
};
export default Home;
