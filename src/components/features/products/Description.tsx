import Image from "next/image";
import { prodDesc01 } from "../../utils/helper";

const Description = () => {
	return (
		<>
			<div
				aria-labelledby="Product Description"
				className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-2"
			>
				<div className="flex flex-col items-start gap-3">
					<h3 className="text-2xl font-medium">Outstanding Features</h3>
					<p>
						The garments labelled as committed are products that have been produced using
						sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to
						support the implementation of practices more committed to the environment.
					</p>
					<ul className="mt-4 flex flex-col gap-2 pl-4">
						<li>– Tonal stitching: 98% cotton, 2% elastane.</li>
						<li>– Supple and stretch knit with a rich touch of wool.</li>
						<li>– Model: Model is 6′1″, wearing a size M.</li>
						<li>– Caring for your clothes is caring for the environment.</li>
					</ul>
				</div>

				<div className="flex flex-col items-start gap-3">
					<h3 className="text-2xl font-medium">Washing Instructions</h3>
					<ul className="mt-4 flex flex-col gap-4">
						<li className="flex items-center gap-3">
							<Image src={prodDesc01} alt="Machine wash max. 30ºC. Short spin." />

							<p>Machine wash max. 30ºC. Short spin.</p>
						</li>
						<li className="flex items-center gap-3">
							<Image src={prodDesc01} alt="Iron maximum 110ºC." />

							<p>Iron maximum 110ºC.</p>
						</li>
						<li className="flex items-center gap-3">
							<Image src={prodDesc01} alt="Do not bleach/bleach." />

							<p>Do not bleach/bleach.</p>
						</li>
						<li className="flex items-center gap-3">
							<Image src={prodDesc01} alt="Do not dry clean." />

							<p>Do not dry clean.</p>
						</li>
						<li className="flex items-center gap-3">
							<Image src={prodDesc01} alt="Tumble dry, medium hear." />

							<p>Tumble dry, medium hear.</p>
						</li>
					</ul>
				</div>
			</div>
			<p>
				We work with monitoring programmes to ensure compliance with our social, environmental and
				health and safety standards for our garments. To assess compliance, we have developed a
				programme of audits and continuous improvement plans. Made of super-soft cotton, the Organic
				Cotton Cutaway Tank features a high neck and back, and a slight curve at the shoulders,
				which makes it extra flattering. If there’s one thing the ’90s got right, it’s the basics.
			</p>
		</>
	);
};

export default Description;
