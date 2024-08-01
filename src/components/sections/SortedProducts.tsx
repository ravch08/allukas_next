"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ProductsProps, SortedProductProps } from "../../types/types";
import { ProductItem, SectionHeading } from "../utils/helper";

const SortedProducts = (props: SortedProductProps) => {
	const { heading, subHeading, products } = props;

	return (
		<section aria-labelledby="New Arrivals">
			<div className="container mx-auto px-8">
				<SectionHeading heading={heading} subHeading={subHeading} />

				<Swiper
					loop={true}
					speed={500}
					grabCursor={true}
					navigation={true}
					spaceBetween={30}
					centeredSlides={false}
					className="pb-14"
					modules={[Pagination, Navigation]}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					breakpoints={{
						300: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
						1400: {
							slidesPerView: 4,
						},
					}}
				>
					{products?.map((product: ProductsProps) => (
						<SwiperSlide key={product.id}>
							<ProductItem
								id={product.id}
								title={product.title}
								price={product.price}
								brand={product.brand}
								rating={product.rating}
								imgSrc1={product.imgSrc1}
								imgSrc2={product.imgSrc2}
								priceCrossed={product.priceCrossed}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default SortedProducts;
