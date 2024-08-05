"use client";

import { useState } from "react";

import { products } from "@/components/utils/data";
import { getProductDetails } from "@/components/utils/getProductDetails";
import { ProductsProps } from "@/types/types";
import { FilterButton, ProductItem } from "../../utils/helper";

const FilteredProducts = () => {
	const [sortOption, setSortOption] = useState("all");

	const { sortedPriceProducts, sortedTitleProducts } = getProductDetails(products);

	let finalProducts;

	if (sortOption === "all") {
		finalProducts = products;
	} else if (sortOption === "bestseller") {
		finalProducts = products?.filter((prod: ProductsProps) =>
			prod.categories!.includes("bestseller")
		);
	} else if (sortOption === "featured") {
		finalProducts = products?.filter((prod: ProductsProps) =>
			prod.categories!.includes("featured")
		);
	} else if (sortOption === "az") {
		finalProducts = sortedTitleProducts;
	} else if (sortOption === "za") {
		finalProducts = sortedTitleProducts.reverse();
	} else if (sortOption === "lh") {
		finalProducts = sortedPriceProducts;
	} else if (sortOption === "hl") {
		finalProducts = sortedPriceProducts.reverse();
	}

	return (
		<section aria-labelledby="Products">
			<div className="container mx-auto px-8">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<div className="relative flex items-center gap-4">
						<FilterButton />
					</div>

					<div className="flex items-center justify-end gap-4">
						<button>
							<svg
								fill="currentColor"
								viewBox="0 0 16 16"
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
							</svg>
						</button>

						<button>
							<svg
								fill="currentColor"
								viewBox="0 0 16 16"
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
							</svg>
						</button>

						<button>
							<svg
								fill="currentColor"
								viewBox="0 0 16 16"
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
							</svg>
						</button>

						<span>|</span>

						<span className="font-medium">Sort By:</span>

						<select
							id="filters"
							name="filters"
							value={sortOption}
							className="border border-gray-200 p-2"
							onChange={(e) => setSortOption(e.target.value)}
						>
							<option value="all" defaultValue={"all"}>
								All Products
							</option>
							<option value="bestseller">Best Selling</option>
							<option value="featured">Featured</option>
							<option value="az">Alphabetically, A-Z</option>
							<option value="za">Alphabetically, Z-A</option>
							<option value="lh">Price, low to high </option>
							<option value="hl">Price, high to low</option>
						</select>
					</div>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{finalProducts?.map((prod: ProductsProps) => (
						<ProductItem
							key={prod.id}
							id={prod.id}
							brand={prod.brand}
							title={prod.title}
							price={prod.price}
							rating={prod.rating}
							imgSrc1={prod.imgSrc1}
							imgSrc2={prod.imgSrc2}
							priceCrossed={prod.priceCrossed}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FilteredProducts;
