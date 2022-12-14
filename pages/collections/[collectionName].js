import * as React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { Navigation } from "../../components/Navigation";
import { BreadcrumbsNavigation } from "../../components/BreadcrumbsNavigation";
import { ProductsList } from "../../components/ProductsList";
import { shopifyClient, parseShopifyResponse } from "../../lib/shopify";

export default function CollectionPage({ products, collectionName }) {
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
			<Container maxWidth="lg">
				<BreadcrumbsNavigation title={collectionName} />
				<ProductsList products={products} />
			</Container>
		</Box>
	);
}

export const getServerSideProps = async ({ params }) => {
	const { collectionName } = params;
	const collectionsData = await shopifyClient.collection.fetchAllWithProducts();
	const collections = parseShopifyResponse(collectionsData);
	const collection = collections.find(
		(collection) => collection.handle === collectionName
	);

	return {
		props: {
			collectionName,
			products: collection.products,
		},
	};
};
