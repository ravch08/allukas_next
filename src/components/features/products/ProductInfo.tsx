import Image from "next/image";
import Link from "next/link";

import { ProductInfoProps } from "../../../types/types";
import { Ratings, payments } from "../../utils/helper";

const ProductInfo = ({ product }: ProductInfoProps) => {
	return (
		<div className="flex flex-col items-start">
			<div className="flex flex-col gap-2">
				<span className="pl-1 uppercase text-gray-500">{product.brand}</span>
				<h2>{product.title}</h2>

				<div className="mb-4 flex items-center gap-6">
					<Ratings stars={product.rating} />
					<span>3 reviews</span>
					<p>🔥12 sold in the last 20 hours</p>
				</div>

				<div className="flex items-center gap-4 text-lg">
					<span className="price">${product.price}</span>
					<span
						className={
							product.priceCrossed ? "text-slate-500 line-through" : "hidden text-slate-500"
						}
					>
						${product.priceCrossed}
					</span>
				</div>

				<p className="py-4 text-lg">
					This regulator has a rolled diaphragm and high flow rate with reduced pressure drop.It has
					an excellent degree of condensation.
				</p>

				<p className="flex items-center gap-2">
					<svg
						fill="none"
						strokeWidth={1.5}
						className="h-4 w-4"
						viewBox="0 0 24 24"
						stroke="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
						/>
					</svg>
					11 people are viewing this right now
				</p>
			</div>

			{/* <ProductShareNSize /> */}

			<div className="my-12 flex w-full flex-col items-start gap-3">
				<p>
					Hurry Up! Only <span className="text-orabg-orange-800 font-medium">10</span> left in
					stock!
				</p>
				<div className="h-2 w-full rounded-md bg-slate-300 after:block after:h-full after:w-1/4 after:rounded-md after:bg-orange-800"></div>
			</div>

			{/* <ProductAddCart /> */}

			<button className="btn btn-gray my-12 w-full">Buy Now</button>

			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<svg
						fill="none"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						className="h-5 w-5"
						stroke="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
					</svg>
					<span>
						Pickup available at{" "}
						<Link href="contact" className="underline">
							Shop location
						</Link>
						. Usually ready in 24 hours.
					</span>
					<br />
				</div>

				<div className="flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-5 w-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
					<p>
						Estimate delivery times: <span className="font-medium">12-26 days</span>{" "}
						(International),
						<span className="font-medium">3-6 days</span> (United States).
					</p>
				</div>

				<div className="flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-5 w-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
						/>
					</svg>
					<p>
						Return within <span className="font-medium">45 days</span> of purchase. Duties & taxes
						are non-refundable.
					</p>
				</div>
			</div>

			<figure className="relative mt-12 flex w-full items-center justify-center border border-gray-200 px-6 py-8">
				<figcaption className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white p-4 text-slate-400">
					Guanantee safe checkout
				</figcaption>
				<Image src={payments} alt="payments" />
			</figure>
		</div>
	);
};

export default ProductInfo;
