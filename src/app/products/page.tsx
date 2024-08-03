"use client";

import { useState } from "react";

import { products } from "@/components/utils/data";
import { getProductDetails } from "@/components/utils/getProductDetails";
import { ProductsProps } from "@/types/types";
import { PagesBanner, ProductItem } from "../../components/utils/helper";

const ProductsPage = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [sortOption, setSortOption] = useState("all");

	const { sortedPriceProducts, sortedTitleProducts } = getProductDetails(products);

	let finalProducts;
	const totalProducts = products?.length;

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
		<main>
			<PagesBanner
				pageTitle="Products"
				subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptate! Sunt quam sint odio."
			/>

			<section aria-labelledby="Products">
				<div className="container mx-auto px-8">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						<div className="relative flex items-center gap-4">
							<button
								onClick={() => setShowFilter((prev) => !prev)}
								className="flex items-center gap-2 bg-black px-6 py-2 text-white"
							>
								{!showFilter ? (
									<svg
										viewBox="0 0 24 24"
										fill="currentColor"
										className="h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="h-4 w-4"
									>
										<path
											fillRule="evenodd"
											d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
											clipRule="evenodd"
										/>
									</svg>
								)}
								Filter
							</button>
							<p>There are {totalProducts} results in total.</p>
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
		</main>
	);
};

export default ProductsPage;
