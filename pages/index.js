import * as React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { Navigation } from "../components/Navigation";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";

export default function Index({ products }) {
	const headerLinks = [
		{
			link: "/",
			name: "Home",
		},
		{
			link: "/products",
			name: "Shop",
		},
		{
			link: "/about",
			name: "About us",
		},
	];

	return (
		<Box>
			<Navigation headerData={headerLinks} />
		</Box>
	);
}

export const getServerSideProps = async () => {
	const products = await shopifyClient.product.fetchAll();

	return {
		props: {
			products: parseShopifyResponse(products),
		},
	};
};
