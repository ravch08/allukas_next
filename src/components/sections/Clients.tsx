"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { clients } from "../utils/data";

const Clients = () => {
	return (
		<section aria-labelledby="Clients" className="border-y border-gray-100 py-16">
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
					{clients?.map((client) => (
						<SwiperSlide key={client.id}>
							<figure className="flex items-center justify-center">
								<Image
									width={100}
									height={100}
									alt={client.title}
									src={client.imgSrc}
									className="w-fit transition-opacity duration-300 ease-in-out hover:opacity-50"
								/>
							</figure>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Clients;
