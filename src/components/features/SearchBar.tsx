"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { products } from "../utils/data";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const router = useRouter();

	const updatedList = searchTerm
		? products?.filter((item) => item.title.toLowerCase().startsWith(searchTerm))
		: null;

	const handleClick = (idx: string) => {
		router.push(`/products/${idx}`);
		setSearchTerm("");
	};

	return (
		<div className="relative flex items-center justify-start">
			<input
				type="text"
				id="search"
				value={searchTerm}
				placeholder="Search Products..."
				onChange={(e) => setSearchTerm(e.target.value)}
				className="py-3 px-4 w-2/3 text-sm border outline-1 outline-slate-400 focus-within:bg-slate-100 border-slate-200"
			/>
			<ul className="w-72 absolute top-[78%] z-30 shadow-md bg-white left-0 rounded-sm">
				{updatedList?.map((item) => (
					<li
						key={item.id}
						onClick={() => handleClick(`${item.id}`)}
						className="p-2 text-sm hover:bg-gray-200 cursor-pointer"
					>
						{item.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SearchBar;
