"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TestimonialProps } from "@/types/types";
import { testimonials } from "../utils/data";
import { SectionHeading, TestimonialItem } from "../utils/helper";

const Testimonials = () => {
	return (
		<section aria-labelledby="Testimonials" className="bg-testimonial">
			<div className="container mx-auto">
				<SectionHeading heading="Our Testimonials" subHeading="Allukas is my favorite store" />

				<Swiper
					speed={1000}
					className="pb-12"
					spaceBetween={30}
					slidesPerView={1}
					grabCursor={true}
					navigation={true}
					centeredSlides={true}
					modules={[Pagination, Navigation]}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
				>
					{testimonials?.map((testimonial: TestimonialProps) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialItem
								author={testimonial?.author}
								rating={testimonial?.rating}
								review={testimonial?.review}
								imgSrc={testimonial?.imgSrc}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
