import type { Metadata } from "next";
import { Jost } from "next/font/google";

import { Footer, Header } from "../components/utils/helper";

import "../styles/App.css";
import "../styles/index.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Allukas | Providing beautiful products.",
	description:
		"Great products and designs and such great quality, they always wash up well no matter how many times I wash them.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={jost.className}>
				<div id="modal"></div>
				<div id="overlay"></div>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
