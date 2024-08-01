import Image from "next/image";

import { aboutSign, aboutUs01, aboutUs02 } from "../utils/helper";

const OurStory = () => {
	return (
		<section aria-labelledby="Our Story" className="pt-0">
			<div className="container mx-auto px-12">
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<Image src={aboutUs01} alt="about us" className="w-full" />
					<Image src={aboutUs02} alt="about us" className="w-full" />
				</div>
				<div className="mt-12 grid grid-cols-1 items-start lg:grid-cols-2">
					<div className="flex items-center gap-4">
						<h2>Our Story</h2>
						<span className="h-0.5 w-24 bg-black"></span>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-lg font-medium">
							Apparently we had reached a great height in the atmosphere, for the sky was a dead
							black has been the industry’s standard dummy text ever since the 1500s.
						</p>

						<p>
							Wrote water woman of heart it total other. By in entirely securing suitable graceful
							at families improved. Zealously few furniture repulsive was agreeable consisted
							difficult. Collected breakfast estimable questions in to favourite it. Known he place
							worth words it as to. Spoke now noise off smart her ready.
						</p>

						<p>
							To shewing another demands to. Marianne property cheerful informed at striking at.
							Clothes parlors however by cottage on. In views it or meant drift to. Be concern
							parlors settled or do shyness address. Remainder northward performed out for
							moonlight. Yet late add name was rent park from rich.
						</p>
						<Image src={aboutSign} alt="signature" className="mt-6 w-fit" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurStory;
