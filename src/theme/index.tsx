"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	cssVariables: true,
	direction: "rtl",
	typography: {
		fontFamily: "var(--iran-yekan), Arial, sans-serif",
	},
	palette: {
		primary: {
			main: "#0D6EFD",
			light: "#4791ff",
			dark: "#004ec2",
			contrastText: "#ffffff",
		},
		error: {
			main: "#c30000",
			light: "#ed2e2e",
			dark: "#9a0000",
			contrastText: "#ffffff",
		},
		success: {
			main: "#00966d",
			light: "#00b38b",
			dark: "#00624a",
			contrastText: "#ffffff",
		},
		warning: {
			main: "#a9791c",
			light: "#f4b740",
			dark: "#7a5a12",
			contrastText: "#000000",
		},
	},
});

export default theme;
