/* eslint-disable no-undef */
import { useState } from "react";
import { Configuration, Layout, useLayoutNavigation } from "react-md";
import "./App.scss";
import {
	HomeSVGIcon,
	SecuritySVGIcon,
	SettingsSVGIcon,
	ShareSVGIcon,
	SnoozeSVGIcon,
	StarSVGIcon,
	StorageSVGIcon,
} from "@react-md/material-icons";
import { CurrentChildren } from "./CurrentChildren";

// see @react-md/layout package for info on the main navigation
const navItems = {
	"/": {
		itemId: "/",
		parentId: null,
		children: "Home",
		leftAddon: <HomeSVGIcon />,
	},
	"/route-1": {
		itemId: "/route-1",
		parentId: null,
		children: "Route 1",
		leftAddon: <StarSVGIcon />,
	},
	"/divider-1": {
		itemId: "/divider-1",
		parentId: null,
		divider: true,
		isCustom: true,
	},
	"/route-2": {
		itemId: "/route-2",
		parentId: null,
		children: "Route 2",
		leftAddon: <ShareSVGIcon />,
	},
	"/route-2-1": {
		itemId: "/route-2-1",
		parentId: "/route-2",
		children: "Route 2-1",
		leftAddon: <SettingsSVGIcon />,
	},
	"/route-2-2": {
		itemId: "/route-2-2",
		parentId: "/route-2",
		children: "Route 2-2",
		leftAddon: <StorageSVGIcon />,
	},
	"/route-2-3": {
		itemId: "/route-2-3",
		parentId: "/route-2",
		children: "Route 2-3",
		leftAddon: <SecuritySVGIcon />,
	},
	"/route-3": {
		itemId: "/route-3",
		parentId: null,
		children: "Route 3",
		leftAddon: <SnoozeSVGIcon />,
	},
};

// const themes = ["primary", "secondary", "default", "clear"];

function App() {
	const [selectedId, setSelectedId] = useState("/");
	return (
		<Configuration>
			<Layout
				id="non-fixed-app-bar-layout"
				title="Title"
				navHeaderTitle="Logo"
				phoneLayout="temporary"
				tabletLayout="temporary"
				landscapeTabletLayout="toggleable"
				desktopLayout="toggleable"
				appBarProps={{ fixed: false }}
				treeProps={{
					...useLayoutNavigation(navItems, selectedId),
					onItemSelect: setSelectedId,
				}}
				mainProps={{ component: "div" }}
			>
				<CurrentChildren route={selectedId} />
			</Layout>
		</Configuration>
	);
}

export default App;
