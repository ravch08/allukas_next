"use client";

import { Description, ReturnPolicies, Reviews, Shipping } from "@/components/utils/helper";
import { useState } from "react";

const ProductMoreInfo = () => {
	const [value, setValue] = useState("description");

	return (
		<section aria-labelledby="Additional Product Information">
			<div className="container mx-auto mb-10 mt-24 px-8">
				<div className="flex items-center justify-center gap-12 border-b border-gray-300">
					<button
						data-value="description"
						className={`prodinfo-link ${value === "description" ? "active" : ""}`}
						onClick={(e) => setValue(e.currentTarget.dataset.value!)}
					>
						Description
					</button>
					<button
						data-value="reviews"
						className={`prodinfo-link ${value === "reviews" ? "active" : ""}`}
						onClick={(e) => setValue(e.currentTarget.dataset.value!)}
					>
						Customer Reviews
					</button>
					<button
						data-value="shipping"
						className={`prodinfo-link ${value === "shipping" ? "active" : ""}`}
						onClick={(e) => setValue(e.currentTarget.dataset.value!)}
					>
						Shiping & Returns
					</button>
					<button
						data-value="policies"
						className={`prodinfo-link ${value === "policies" ? "active" : ""}`}
						onClick={(e) => setValue(e.currentTarget.dataset.value!)}
					>
						Return Policies
					</button>
				</div>

				<>
					{value === "description" ? <Description /> : null}
					{value === "reviews" ? <Reviews /> : null}
					{value === "shipping" ? <Shipping /> : null}
					{value === "policies" ? <ReturnPolicies /> : null}
				</>
			</div>
		</section>
	);
};

export default ProductMoreInfo;
