"use client";

import { useState } from "react";

const CategoryDropdown = () => {
	const [showCatDropdown, setShowCatDropdown] = useState(false);

	return (
		<div className="flex items-center justify-start gap-2">
			<button
				onClick={() => setShowCatDropdown((prev) => !prev)}
				className={`relative flex items-center justify-start gap-2 transition-colors duration-300 ease-in-out ${
					showCatDropdown ? `bg-black` : `bg-gray-300`
				} px-6 py-4`}
			>
				<span className={showCatDropdown ? "uppercase text-white" : "uppercase"}>
					Browse Categories
				</span>
				<svg
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					className={`h-4 w-4 transition-transform duration-300 ease-in-out ${
						showCatDropdown ? "rotate-180 fill-white" : "fill-black"
					}`}
				>
					<path
						fillRule="evenodd"
						d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
						clipRule="evenodd"
					/>
				</svg>

				<div
					className={`absolute ${
						showCatDropdown ? `flex` : `hidden`
					} left-0 top-full w-full flex-col items-start bg-white  shadow-md`}
				>
					<a
						href="#!"
						className="flex w-full border-b border-gray-200 px-6 py-3 text-sm hover:bg-gray-100"
					>
						New Product
					</a>
					<a
						href="#!"
						className="flex w-full border-b border-gray-200 px-6 py-3 text-sm hover:bg-gray-100"
					>
						Top on Sale
					</a>
					<a
						href="#!"
						className="flex w-full border-b border-gray-200 px-6 py-3 text-sm hover:bg-gray-100"
					>
						Special Offer!
					</a>
					<a
						href="#!"
						className="flex w-full border-b border-gray-200 px-6 py-3 text-sm hover:bg-gray-100"
					>
						Necklaces
					</a>
					<a
						href="#!"
						className="flex w-full border-b border-gray-200 px-6 py-3 text-sm hover:bg-gray-100"
					>
						Rings
					</a>
					<a
						href="#!"
						className="flex w-full border-b border-gray-200 px-6 py-3 text-sm hover:bg-gray-100"
					>
						Bracelets
					</a>
					<a
						href="#!"
						className="flex w-full border-b border-gray-200 px-6 py-3 text-sm hover:bg-gray-100"
					>
						Earrings
					</a>
					<a
						href="#!"
						className="flex w-full items-center justify-between border-b border-gray-200 px-6 py-3 text-sm font-medium hover:bg-gray-100"
					>
						All Categories
						<svg
							fill="none"
							strokeWidth={1.5}
							className="h-6 w-6"
							viewBox="0 0 24 24"
							stroke="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					</a>
				</div>
			</button>
		</div>
	);
};

export default CategoryDropdown;
