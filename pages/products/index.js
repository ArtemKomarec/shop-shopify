import * as React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { Navigation } from "../../components/Navigation";
import { ProductsList } from "../../components/ProductsList";
import { shopifyClient, parseShopifyResponse } from "../../lib/shopify";
import { Sidebar } from "../../components/sidebar/sidebar";
import { ShopBanner } from "../../components/shop-banner";
import { MobileSidebar } from "../../components/sidebar/mobile-sidebar";

export default function AllProductsPage({ products }) {
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
						<Sidebar />
					</Box>
					<Box>
						<ShopBanner />
						<MobileSidebar />
						<ProductsList products={products} />
					</Box>
				</Box>
			</Container>
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
