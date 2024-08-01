import Image from "next/image";

import { aboutMission } from "../utils/helper";

const OurMission = () => {
	return (
		<section aria-labelledby="Our Vision & Mission" className="pt-0">
			<div className="grid grid-cols-1 overflow-hidden lg:grid-cols-2">
				<Image src={aboutMission} alt="Mission & Vision" className="h-full" />

				<div className="flex flex-col items-center justify-center gap-12 bg-gray-100 p-16">
					<div>
						<h2 className="mb-2 text-3xl">Our Mission</h2>
						<p>
							By in entirely securing suitable graceful at families improved. Zealously few
							furniture repulsive was agreeable consisted difficult. Collected breakfast estimable
							questions in to favourite it. Known he place worth words it as to. Spoke now noise off
							smart her ready.
						</p>
					</div>
					<div>
						<h2 className="mb-2 text-3xl">Our Vision</h2>
						<p>
							We were supposed to head to California this weekend but last minute had to cancel and
							I’m so bummed I was so ready for the beach!! These pictures were from last weekend
							when the weather.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurMission;
