import localFont from "next/font/local";

export const iranYekan = localFont({
	src: [
		{
			path: "./IranYekan.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--iran-yekan",
});
