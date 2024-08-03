"use client";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
	banner01,
	banner01_1024,
	banner01_768,
	banner02,
	banner02_1024,
	banner02_768,
	banner03,
	banner03_1024,
	banner03_768,
} from "../utils/helper";

const Banner = () => {
	return (
		<section aria-labelledby="Product Main Banners" className="pt-0">
			<Swiper
				loop={true}
				speed={1500}
				effect={"fade"}
				spaceBetween={30}
				grabCursor={true}
				navigation={true}
				slidesPerView={1}
				centeredSlides={true}
				modules={[Autoplay, Pagination, Navigation, EffectFade]}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
			>
				<SwiperSlide>
					<div className="relative flex flex-col">
						<picture>
							<source
								media="(min-width: 768px) and (max-width: 1024px)"
								srcSet={banner01_1024.src}
							/>
							<source media="(max-width: 767px)" srcSet={banner01_768.src} />
							<Image priority src={banner01} alt="A Minimalistic Design Masculine" />
						</picture>

						<div className="absolute left-[15%] top-1/4">
							<h1 className="text-3xl md:text-4xl xl:text-6xl">
								A Minimalistic <br /> Design Masculine
							</h1>
							<p className="mb-10 mt-4 text-base text-gray-500 xl:text-xl">
								Get all the awesome products for your dynamic urban lifestyle!
							</p>
							<Link href="products" className="btn btn-outline">
								Shop Now
							</Link>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="relative flex flex-col">
						<picture>
							<source
								media="(min-width: 768px) and (max-width: 1024px)"
								srcSet={banner02_1024.src}
							/>
							<source media="(max-width: 767px)" srcSet={banner02_768.src} />
							<Image src={banner02} alt="Introducing The Lost Day Collection" />
						</picture>
						<div className="absolute left-[15%] top-1/4">
							<h1 className="text-3xl md:text-4xl xl:text-6xl">
								Introducing The <br />
								Lost Day Collection
							</h1>
							<p className="mb-10 mt-4 text-base text-gray-500 xl:text-xl">
								Ring, Occasion Pieces, Pandora & much more! Get limited Collections!
							</p>
							<Link href="products" className="btn btn-outline">
								Shop Now
							</Link>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="relative flex flex-col">
						<picture>
							<source
								media="(min-width: 768px) and (max-width: 1024px)"
								srcSet={banner03_1024.src}
							/>
							<source media="(max-width: 767px)" srcSet={banner03_768.src} />
							<Image src={banner03} alt="New S/S 2024 Amazing collections" />
						</picture>
						<div className="absolute left-[15%] top-1/4">
							<h1 className="text-3xl md:text-4xl xl:text-6xl">
								New S/S 2024
								<br />
								Amazing collections
							</h1>
							<p className="mb-10 mt-4 text-base text-gray-500 xl:text-xl">
								A symbol of love and a modern take on gold.
							</p>
							<Link href="products" className="btn btn-outline">
								Shop Now
							</Link>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Banner;
