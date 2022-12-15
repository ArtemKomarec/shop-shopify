import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const ShopBanner = () => {
	return (
		<div>
			<div>
				<Box
					sx={{
						paddingTop: "100px",
						paddingBottom: "100px",
						paddingLeft: "30px",
						paddingRight: "30px",
						position: "relative",
						backgroundImage: `url("https://themes.pixelstrap.com/voxo/front-end/assets/images/fashion/banner.jpg")`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						display: "block",
					}}
				>
					<Box
						sx={{
							maxWidth: "400px",
						}}
					>
						<Typography
							variant="h1"
							sx={{
								margin: 0,
								padding: 0,
								fontSize: "2rem",
							}}
						>
							Shop The Latest Trends
						</Typography>
						<Typography
							sx={{
								marginTop: "12px",
							}}
						>
							Shop the latest clothing trends with our weekly edit of what's new
							in online at Voxo. From out latest woman collection.
						</Typography>
					</Box>
				</Box>
			</div>
			<Box>
				<Typography
					sx={{
						marginTop: "16px",
					}}
				>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged.
				</Typography>
			</Box>
		</div>
	);
};
