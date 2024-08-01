import Image from "next/image";
import Link from "next/link";
import { mbanner01, mbanner02 } from "../utils/helper";

const MiniBanner = () => {
	return (
		<section aria-labelledby="Collections Banners">
			<div className="container mx-auto px-8">
				<div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
					<div className="mt-12 flex flex-col gap-8">
						<h2>
							Collection Designed for <br /> Spring/Summer 2024
						</h2>

						<Image src={mbanner01} alt="Collection Designed for Spring/Summer 2024" />
					</div>

					<div className="flex flex-col gap-4">
						<Image src={mbanner02} alt="Designed for Those Who Evade Limits" />

						<h2 className="mt-8">Designed for Those Who Evade Limits</h2>
						<p className="pb-6">
							Attention to details is always a good feature. We couldn’t think of any better present
							for our 5th anniversary than a pair of exclusive watches from the Lawson collection.
							time I look at my watch.
						</p>

						<Link href="products" className="btn btn-outline w-fit">
							Explore More
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MiniBanner;
