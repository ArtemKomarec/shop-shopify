import { useState } from "react";
import { Button, Divider, Menu, MenuItem, styled } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => {});

export const Sorting = ({ products, sortOrdering }) => {
	const [sorting, setSorting] = useState(null);
	const open = Boolean(sorting);
	const handleClick = (event) => {
		setSorting(event.currentTarget);
	};

	const handleAscendingSort = () => {
		products.sort((a, b) => a.variants[0].price - b.variants[0].price);
		sortOrdering((old) => ({ ...old, products }));
		setSorting(null);
	};

	const handleDescendingSort = () => {
		products.sort((a, b) => b.variants[0].price - a.variants[0].price);
		sortOrdering((old) => ({ ...old, products }));
		setSorting(null);
	};

	const handleRandomSort = () => {
		products.sort((a, b) => Math.random(a) - Math.random(b));
		sortOrdering((old) => ({ ...old, products }));
		setSorting(null);
	};

	const handleClose = () => {
		setSorting(null);
	};

	return (
		<div>
			<Button
				id="sorting-button"
				aria-controls={open ? "sorting-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				variant="outlined"
				onClick={handleClick}
				startIcon={<SortIcon />}
			>
				Sorting
			</Button>
			<StyledMenu
				id="sorting-menu"
				MenuListProps={{
					"aria-labelledby": "sorting-button",
				}}
				anchorEl={sorting}
				open={open}
				onClose={handleClose}
			>
				<MenuItem onClick={handleAscendingSort} disableRipple>
					Ascending by price
				</MenuItem>
				<Divider sx={{ my: 0.5 }} />
				<MenuItem onClick={handleDescendingSort} disableRipple>
					Descending by price
				</MenuItem>
				<Divider sx={{ my: 0.5 }} />
				<MenuItem onClick={handleRandomSort} disableRipple>
					Random sort
				</MenuItem>
			</StyledMenu>
		</div>
	);
};
