import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const Navigation = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Link href="/" underline="none" color="inherit">
					<Typography mr={2}>All products</Typography>
				</Link>
				<Link href="/collections/battery" underline="none" color="inherit">
					<Typography mr={2}>Battery</Typography>
				</Link>
				<Link href="/collections/earphones" underline="none" color="inherit">
					<Typography>Earphones</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
};
