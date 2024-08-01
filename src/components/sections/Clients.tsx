"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { client1, client2, client3, client4, client5 } from "../utils/helper";

const Clients = () => {
	return (
		<section aria-labelledby="Clients" className="border-b border-gray-200 py-16">
			<div className="container mx-auto">
				<Swiper
					spaceBetween={30}
					grabCursor={true}
					centeredSlides={false}
					breakpoints={{
						0: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 5,
						},
					}}
				>
					<SwiperSlide>
						<figure className="flex items-center justify-center">
							<Image
								src={client1}
								alt="Bershka"
								className="transition-opacity duration-300 ease-in-out hover:opacity-50"
							/>
						</figure>
					</SwiperSlide>
					<SwiperSlide>
						<figure className="flex items-center justify-center">
							<Image
								src={client2}
								alt="H&M"
								className="transition-opacity duration-300 ease-in-out hover:opacity-50"
							/>
						</figure>
					</SwiperSlide>
					<SwiperSlide>
						<figure className="flex items-center justify-center">
							<Image
								src={client3}
								alt="Zara"
								className="transition-opacity duration-300 ease-in-out hover:opacity-50"
							/>
						</figure>
					</SwiperSlide>
					<SwiperSlide>
						<figure className="flex items-center justify-center">
							<Image
								src={client4}
								alt="Mango"
								className="transition-opacity duration-300 ease-in-out hover:opacity-50"
							/>
						</figure>
					</SwiperSlide>
					<SwiperSlide>
						<figure className="flex items-center justify-center">
							<Image
								src={client5}
								alt="Pull&Bear"
								className="transition-opacity duration-300 ease-in-out hover:opacity-50"
							/>
						</figure>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Clients;
