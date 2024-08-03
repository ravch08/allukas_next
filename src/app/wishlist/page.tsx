"use client";

import useCartStore from "@/hooks/useCartStore";
import { ProductsProps } from "@/types/types";
import { PagesBanner, ProductItem } from "../../components/utils/helper";

const WishlistPage = () => {
	const { wishlistItems } = useCartStore();

	return (
		<main>
			<PagesBanner
				pageTitle="Wishlist"
				subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptate! Sunt quam sint odio."
			/>

			<div className="container mx-auto">
				{wishlistItems.length === 0 ? (
					<h3 className="text-xl my-20 flex items-center justify-center w-full">
						😔 You Wishlist is Empty!
					</h3>
				) : null}
				{wishlistItems.length ? (
					<div className="my-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{wishlistItems?.map((prod: ProductsProps) => (
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
				) : null}
			</div>
		</main>
	);
};

export default WishlistPage;
