import {
	Button,
	ButtonBase,
	Container,
	styled,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import banner from "../../assets/main-banner/bunny-duracell.png";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export const Banner = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
			}}
		>
			<Box
				sx={{
					maxWidth: "400px",
					width: "100%",
					padding: "80px 20px",
					background: "#232323",
					color: "#FFFFFF",
					fontWeight: "600",
				}}
			>
				<Box display="flex" flexDirection="column" gap="24px">
					<Typography
						variant="h1"
						sx={{
							fontSize: 56,
							fontWeight: 700,
						}}
					>
						Raw Ham Colorblock T-shirt
					</Typography>
					<Typography
						sx={{
							fontSize: 28,
						}}
					>
						The international hoodies with excellent durable fabric, not to
						heavy but simply PERFECT for Indian summer.
					</Typography>
					<Typography
						sx={{
							fontSize: 38,
							fontWeight: 900,
						}}
					>
						44.99$
					</Typography>
					<Button
						sx={{
							border: "2px solid #FFFFFF",
							background: "white",
							color: "#232323",
							"&:hover": {
								background: "#232323",
								color: "white",
							},
						}}
						endIcon={<ShoppingBagIcon />}
					>
						Add to cart
					</Button>
				</Box>
			</Box>
			<Box
				sx={{
					maxWidth: "1600px",
					width: "100%",
					minHeight: "800px",
					height: "100vh",
					display: "flex",
					flexDirection: "row",
					backgroundImage: `url(${banner.src})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "80% 20%",
					backgroundColor: "#eff2f7",
				}}
			></Box>
		</Box>
	);
};
