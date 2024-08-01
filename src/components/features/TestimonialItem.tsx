import Image from "next/image";

import { TestimonialProps } from "@/types/types";
import { Ratings } from "../utils/helper";

const TestimonialItem = ({ rating, author, imgSrc, review }: TestimonialProps) => {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<Ratings stars={rating} />
			<p className="w-5/6 py-6 text-xl leading-10 md:text-3xl md:leading-loose lg:w-2/3">
				{review}
			</p>
			<figure>
				<Image src={imgSrc} alt={author} width={50} height={50} />
			</figure>
			<span className="mt-4 text-sm font-medium">{author}</span>
		</div>
	);
};

export default TestimonialItem;
