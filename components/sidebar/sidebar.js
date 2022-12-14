import {
	Box,
	CssBaseline,
	Drawer,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemButton,
} from "@mui/material";

export const Sidebar = () => {
	const productsSlugs = [
		{
			link: "/collections/battery",
			name: "Battery",
		},
		{
			link: "/collections/earphones",
			name: "Earphones",
		},
	];

	const drawerWidth = 240;

	const drawer = (
		<List>
			{productsSlugs.map((productSection) => (
				<ListItem key={productSection.name} disablePadding>
					<ListItemButton>
						<Link href={productSection.link}>{productSection.name}</Link>
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
							height: "240px",
							border: "1px solid #ced4da",
							borderRadius: "5px",
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
