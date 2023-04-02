import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
	Button,
} from "@mui/material";
import Link from "next/link";
import { PATHS } from "@/paths";
import styles from "./Header.module.css";

const drawerWidth = 240;

interface NavItemsProps {
	title: string;
	path: string;
}

const NAV_ITEMS: Array<NavItemsProps> = [
	{ title: "HOME", path: PATHS.HOME },
	{ title: "UPDATES", path: PATHS.UPDATES },
	{ title: "PROFILE", path: PATHS.PROFILE },
];

export const Header: React.FC<Record<string, string>> = React.memo(() => {
	const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

	const container =
		typeof window !== undefined ? () => window.document.body : undefined;

	const handleDrawerToggle = React.useCallback(() => {
		setMobileOpen(prevState => !prevState);
	}, [setMobileOpen]);

	const listWebOptions = React.useMemo(() => {
		return NAV_ITEMS.map(({ title, path }) => {
			return (
				<Link href={path} key={title} className={styles.link}>
					<Button sx={{ color: "#000" }}>{title}</Button>
				</Link>
			);
		});
	}, []);

	const listMobileOptions = React.useMemo(() => {
		return NAV_ITEMS.map(({ title, path }) => {
			return (
				<Link href={path} key={title} className={styles.link}>
					<ListItem disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={title} />
						</ListItemButton>
					</ListItem>
				</Link>
			);
		});
	}, []);

	return (
		<>
			<CssBaseline />
			<AppBar component='nav'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
						TURNOUT
					</Typography>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>{listWebOptions}</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
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
					}}>
					<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
						<Typography variant='h6' sx={{ my: 2, marginTop: 0, marginBottom: 0 }}>
							<IconButton
								sx={{ p: 0, width: "85%", height: "120px", borderRadius: 0 }}>
								<Toolbar>
									<Box
										component='img'
										alt='Turnout'
										src='/logo/turnout_logo.svg'
										sx={{ width: "100%", height: "100%" }}
									/>
								</Toolbar>
							</IconButton>
						</Typography>
						<Divider />
						<List>{listMobileOptions}</List>
					</Box>
				</Drawer>
			</Box>
		</>
	);
});
