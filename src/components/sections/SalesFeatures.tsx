import Image from "next/image";
import { sf_returns, sf_securedPayments, sf_shipping, sf_support } from "../utils/helper";

const SalesFeatures = () => {
	return (
		<section aria-labelledby="Sales Features" className="py-12">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-4">
					<div className="flex flex-col items-center justify-center">
						<Image src={sf_returns} alt="Returns" />
						<h3 className="mt-4 font-semibold">Free Shipping</h3>
						<span className="text-sm text-gray-600">For all Orders Over $100</span>
					</div>
					<div className="flex flex-col items-center justify-center">
						<Image src={sf_securedPayments} alt="Secured Payments" />
						<h3 className="mt-4 font-semibold">30 Days Returns</h3>
						<span className="text-sm text-gray-600">For an Exchange Product</span>
					</div>
					<div className="flex flex-col items-center justify-center">
						<Image src={sf_shipping} alt="Free Shipping" />
						<h3 className="mt-4 font-semibold">Secured Payment</h3>
						<span className="text-sm text-gray-600">Payment Cards Accepted</span>
					</div>
					<div className="flex flex-col items-center justify-center">
						<Image src={sf_support} alt="Supports" />
						<h3 className="mt-4 font-semibold">Support 24/7</h3>
						<span className="text-sm text-gray-600">Contact us Anytime</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SalesFeatures;
