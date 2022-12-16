import { Box, Button, Container, Link, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export const NewProducts = ({ collections }) => {
	return (
		<Container maxWidth="lg" sx={{ padding: "40px 20px" }}>
			<Box marginTop="40px" display="flex" flexDirection="row" gap="40px">
				{collections
					.slice(Math.max(collections.length - 3, 0))
					.map((currentCollection) => (
						<Box
							key={currentCollection.handle}
							display="flex"
							flexDirection="column"
							sx={{
								maxWidth: 320,
								width: "100%",
								boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
							}}
						>
							<Box
								sx={{
									minHeight: 330,
									// background: "#eff2f7",
									backgroundImage: `url(${currentCollection.image.src})`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									backgroundPosition: "80% 20%",
									backgroundColor: "#eff2f7",
								}}
							>
								{console.log(currentCollection)}
							</Box>
							<Box
								sx={{
									backgroundColor: "#eff2f7",
									padding: "10px 8px",
								}}
							>
								<Typography variant="h1" fontSize={30} fontWeight={400}>
									{currentCollection.title}
								</Typography>
								<Typography
									fontSize={22}
									fontWeight={300}
									lineHeight={1.2}
									marginTop="12px"
								>
									{currentCollection.description}
								</Typography>
								<Link
									href={`/collections/${currentCollection.handle}`}
									target="_blank"
									sx={{
										textDecoration: "none",
									}}
								>
									<Button
										endIcon={<OpenInNewIcon />}
										sx={{
											maxWidth: 100,
											width: "100%",
											marginTop: "12px",
											padding: "4px",
											background: "#355e6f",
											border: "2px solid #355e6f",
											color: "#eff2f7",
											"&:hover": {
												opacity: 1,
												backgroundColor: "#eff2f7",
												border: "2px solid #355e6f",
												color: "#355e6f",
											},
										}}
									>
										View
									</Button>
								</Link>
							</Box>
						</Box>
					))}
			</Box>
		</Container>
	);
};
