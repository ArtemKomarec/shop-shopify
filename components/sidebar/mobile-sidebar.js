import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
	Box,
	Drawer,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemButton,
} from "@mui/material";

export const MobileSidebar = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const drawerWidth = 240;

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
		<div>
			<Box>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: 2, display: { sm: "none" } }}
				>
					<FilterListIcon /> {"  "}Filter
				</IconButton>
			</Box>
			<Drawer
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
			>
				{drawer}
			</Drawer>
		</div>
	);
};
