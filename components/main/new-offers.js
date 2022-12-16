import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import banner from "../../assets/main-banner/bunny-duracell.png";

export const NewOffers = ({ products }) => {
	return (
		<Container
			maxWidth="xl"
			sx={{
				padding: "40px 0px",
			}}
		>
			<Box>
				<Typography variant="h1" align="center" fontSize={30} fontWeight={600}>
					New Offers
				</Typography>
				<Typography
					align="center"
					fontSize={16}
					fontWeight={400}
					color="#7e7e7e"
				>
					Just for you
				</Typography>
				<Box
					width="100%"
					maxHeight="490px"
					marginTop="40px"
					display="flex"
					flexDirection="row"
					justifyContent="center"
					gap="30px"
				>
					<Box
						sx={{
							width: "50%",
							position: "relative",
							display: "flex",
							flexDirection: "row",
							background: "#eff2f7",
						}}
					>
						<Image src={banner.src} width={400} height={500} />
						<Box width="50%" padding="50px" textAlign="right">
							<Typography>new Products</Typography>
							<Typography></Typography>
						</Box>
					</Box>
					<Box
						sx={{
							width: "50%",
							display: "flex",
							flexDirection: "column",
							gap: "20px",
						}}
					>
						<Box
							sx={{
								width: "100%",
								minHeight: 250,
								padding: "0px 50px",
								display: "flex",
								position: "relative",
								flexDirection: "row",
								justifyContent: "flex-end",
								background: "#eff2f7",
							}}
						>
							<Box
								sx={{
									width: "70%",
									padding: "60px 0px",
									alignSelf: "flex-start",
								}}
							>
								<Typography>New products by</Typography>
								<Button
									sx={{
										background: "pink",
									}}
								>
									s
								</Button>
							</Box>
							<Box
								sx={{
									position: "relative",
								}}
							></Box>
							<Image
								src={banner}
								width={200}
								height={250}
								style={{ left: "100%" }}
							/>
						</Box>
						<Box
							display="flex"
							flexDirection="row"
							gap="30px"
							justifyContent="space-between"
						>
							<Box
								position="relative"
								maxWidth={210}
								width="100%"
								height={210}
								objectFit="contain"
								background="#eff2f7"
							>
								<Image src={banner.src} width={500} height={500} />
							</Box>
							<Box
								position="relative"
								maxWidth={210}
								width="100%"
								height={210}
								objectFit="contain"
								background="#eff2f7"
							>
								<Image src={banner.src} width={500} height={500} />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};
