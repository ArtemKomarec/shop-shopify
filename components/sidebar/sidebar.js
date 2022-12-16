import {
	Box,
	Drawer,
	Link,
	List,
	ListItem,
	ListItemButton,
	Typography,
} from "@mui/material";

export const Sidebar = ({ collections }) => {
	const drawerWidth = 240;

	const drawer = (
		<List>
			<Typography
				variant="h1"
				sx={{
					padding: "14px 16px",
					fontSize: "24px",
				}}
			>
				Categories
			</Typography>
			{collections.map((productSection) => (
				<ListItem key={productSection.title} disablePadding>
					<ListItemButton>
						<Link
							href={`/collections/${productSection.handle}`}
							sx={{
								textDecoration: "none",
								color: "#212529",
							}}
						>
							{productSection.title}
						</Link>
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);

	return (
		<Box>
			<Box
				sx={{
					width: { sm: drawerWidth },
					flexShrink: { sm: 0 },
				}}
			>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							position: "relative",
							boxSizing: "border-box",
							maxWidth: drawerWidth,
							width: "100%",
							border: "1px solid #eff2f7",
							borderRadius: "5px",
							backgroundColor: "#eff2f7",
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>{" "}
		</Box>
	);
};
