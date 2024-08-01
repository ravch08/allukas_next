"use client";

import { useEffect, useState } from "react";

const ScrollTop = () => {
	const [scroll, setScroll] = useState("");

	const handleScroll = () => {
		const scrollClass = window.scrollY > 150 ? "scale-100" : "";
		setScroll(scrollClass);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		() => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollTop =
		"fixed bottom-8 z-50 right-8 flex h-12 w-12 scale-0 cursor-pointer items-center justify-center rounded-full bg-black shadow-lg transition-transform duration-300 ease-in-out";

	return (
		<div className={`${scrollTop} ${scroll}`} onClick={scrollToTop}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="h-5 w-5">
				<path
					fillRule="evenodd"
					d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
					clipRule="evenodd"
				/>
			</svg>
		</div>
	);
};

export default ScrollTop;
