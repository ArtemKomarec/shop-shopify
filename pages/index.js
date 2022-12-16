import * as React from "react";
import Box from "@mui/material/Box";

import { Navigation } from "../components/Navigation";
import { Banner } from "../components/main/banner";
import { NewProducts } from "../components/main/newProductsSection";
import { shopifyClient } from "../lib/shopify";
import { parseShopifyResponse } from "../lib/shopify";
import { NewOffers } from "../components/main/new-offers";

export default function Index({ products, collections }) {
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
			<Banner />
			<NewProducts collections={collections} />
			<NewOffers products={products} />
		</Box>
	);
}

export const getServerSideProps = async () => {
	const products = await shopifyClient.product.fetchAll();

	const collectionsData = await shopifyClient.collection.fetchAllWithProducts();
	const collections = parseShopifyResponse(collectionsData);

	return {
		props: {
			collections,
			products: parseShopifyResponse(products),
		},
	};
};
