import * as React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { Navigation } from "../../components/Navigation";
import { ProductsList } from "../../components/products/ProductsList";
import { shopifyClient, parseShopifyResponse } from "../../lib/shopify";
import { Sidebar } from "../../components/sidebar/sidebar";
import { ShopBanner } from "../../components/products/shop-banner";
import { MobileSidebar } from "../../components/sidebar/mobile-sidebar";
import { Sorting } from "../../components/products/sorting";
import { useState } from "react";

export default function AllProductsPage({ products, collections }) {
	const [sortOrdering, setSortOrdering] = useState();

	const headerLinks = [
		{
			link: "/",
			name: "Home",
		},
		{
			link: "/about",
			name: "About us",
		},
	];

	return (
		<Box>
			<Navigation headerData={headerLinks} />
			<Container
				sx={{
					marginTop: "40px",
				}}
				maxWidth="lg"
			>
				<Box display="flex" flexDirection="row" gap="30px">
					<Box display="flex" flexDirection="column">
						<Sidebar collections={collections} />
					</Box>
					<Box>
						<ShopBanner />
						<Box
							marginTop="40px"
							display="flex"
							flexDirection="row"
							gap="14px"
							alignItems="center"
						>
							<Sorting products={products} sortOrdering={setSortOrdering} />
							{console.log(sortOrdering)}
							<MobileSidebar collections={collections} />
						</Box>
						<ProductsList products={products} />
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export const getServerSideProps = async (params) => {
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
