import Image from "next/image";
import Link from "next/link";

import useCartStore from "@/hooks/useCartStore";
import { ProductsProps } from "../../types/types";

const ProductItem = (props: ProductsProps) => {
	const { addToCart } = useCartStore();
	const { id, brand, imgSrc1, imgSrc2, title, price, priceCrossed } = props;

	return (
		<div className="flex flex-col items-center justify-center">
			<figure className="group relative overflow-hidden rounded-md">
				<Image
					alt={title}
					width={400}
					height={400}
					src={imgSrc1}
					className="z-10 w-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
				/>
				<Image
					alt={title}
					width={400}
					height={400}
					src={imgSrc2}
					className="absolute left-0 top-0 -z-10 w-full"
				/>

				<div className="absolute -right-12 top-4 flex flex-col items-center gap-2 transition-all duration-500 ease-in-out group-hover:right-2">
					<button className="rounded-full bg-white p-3 shadow-md transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
						</svg>
					</button>

					<button className="rounded-full bg-white p-3 shadow-md transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
								clipRule="evenodd"
							/>
						</svg>
					</button>

					<button
						onClick={() => addToCart(id!)}
						className="rounded-full bg-white p-3 shadow-md transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
					>
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
						</svg>
					</button>
				</div>
			</figure>

			<span className="mt-6 text-sm uppercase text-gray-400">{brand}</span>

			<Link
				href={`/products/${id}`}
				className="pb-2 text-lg transition-colors duration-300 ease-in-out hover:text-rose-500"
			>
				{title}
			</Link>

			<div className="flex items-center gap-4">
				<span>${price}</span>
				<span className={priceCrossed ? "line-through" : "hidden"}>${priceCrossed}</span>
			</div>
		</div>
	);
};

export default ProductItem;
