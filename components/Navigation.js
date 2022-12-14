import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const Navigation = ({ headerData }) => {
	return (
		<AppBar position="static">
			<Toolbar>
				{headerData.map((item) => (
					<Link
						href={item.link}
						underline="none"
						color="inherit"
						key={item.name}
					>
						<Typography mr={2}>{item.name}</Typography>
					</Link>
				))}
			</Toolbar>
		</AppBar>
	);
};
