import * as React from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export const ProductsList = ({ products }) => {
	const router = useRouter();
	const goToProductPage = (productHandle) => {
		console.log(productHandle);
		router.push(`/product/${productHandle}`);
	};

	return (
		<Box>
			{products && products.length > 0 ? (
				<ImageList cols={5} gap={20}>
					{products.map((product) => (
						<ImageListItem
							style={{ cursor: "pointer" }}
							onClick={() => goToProductPage(product.handle)}
							key={product.id}
						>
							<img
								src={`${product.images[0].src}?w=250&auto=format`}
								srcSet={`${product.images[0].src}?w=250&auto=format&dpr=2 2x`}
								alt={product.title}
								loading="lazy"
							/>
							<ImageListItemBar
								title={product.title}
								subtitle={
									<span>
										Price:
										{parseInt(product.variants[0].price).toFixed(0)}
										р.
									</span>
								}
								position="below"
							/>
						</ImageListItem>
					))}
				</ImageList>
			) : (
				<Typography variant="body1" align="center">
					There are no products in this collection
				</Typography>
			)}
		</Box>
	);
};
