import * as React from "react";
import Image from "next/image";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Navigation } from "../../components/Navigation";
import { BreadcrumbsNavigation } from "../../components/BreadcrumbsNavigation";
import { shopifyClient, parseShopifyResponse } from "../../lib/shopify";

export default function ProductPage({ product }) {
	console.log(product);
	return (
		<Box>
			<Navigation />
			{product && (
				<Container maxWidth="lg">
					<BreadcrumbsNavigation title={product.title} />
					<Grid container direction="row">
						<Grid item xs={6}>
							<Image
								src={product.images[0].src}
								alt={`Picture of ${product.title}`}
								width={500}
								automatically="true"
								provided="true"
								height={500}
							/>
						</Grid>
						<Grid item xs={6}>
							<Typography variant="h3" my={2}>
								{product.title}
							</Typography>
							<Grid mt={4}>
								<Typography variant="h6" component="span">
									Price:{" "}
								</Typography>
								<Typography variant="body1" component="span">
									{parseInt(product.variants[0].price).toFixed(0)}р.
								</Typography>
							</Grid>
							<Grid>{product.description}</Grid>
							<Grid mt={1}>
								<Button variant="contained">Add to cart</Button>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			)}
		</Box>
	);
}

export const getServerSideProps = async ({ params }) => {
	const { productHandle } = params;
	const product = await shopifyClient.product.fetchByHandle(productHandle);

	console.log(product);

	return {
		props: {
			product: parseShopifyResponse(product),
		},
	};
};
