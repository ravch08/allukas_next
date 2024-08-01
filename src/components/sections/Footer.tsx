import Image from "next/image";
import Link from "next/link";

import ScrollTop from "../features/ScrollToTop";
import SocialIcons from "../features/SocialIcons";

import { logo, payments } from "../utils/helper";

const Footer = () => {
	return (
		<>
			<footer className="border-t border-gray-200 py-24">
				<div className="container mx-auto px-8">
					<div className="grid grid-cols-1 place-items-center gap-16 sm:grid-cols-2 sm:place-items-start lg:grid-cols-4 ">
						<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
							<Link href="/">
								<Image src={logo} alt="Alukas & C" />
							</Link>

							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, distinctio quis
								placeat porro fuga et molestiae eius deserunt impedit quasi.
							</p>

							<SocialIcons />
						</div>

						<div className="flex flex-col gap-2 text-center sm:text-left">
							<span className="mb-3 font-bold">About Alukas</span>
							<Link className="ftr-link" href="about">
								About Us
							</Link>
							<Link className="ftr-link" href="#!">
								Core Values
							</Link>
							<Link className="ftr-link" href="#!">
								Careers
							</Link>
							<Link className="ftr-link" href="#!">
								Blogs
							</Link>
							<Link className="ftr-link" href="#!">
								Sitemap
							</Link>
						</div>

						<div className="flex flex-col gap-2 text-center sm:text-left">
							<span className="mb-3 font-bold">Our Company</span>
							<Link className="ftr-link" href="about">
								Shipping App
							</Link>
							<Link className="ftr-link" href="#!">
								Be an Affiliate
							</Link>
							<Link className="ftr-link" href="#!">
								Advertise your Product
							</Link>
							<Link className="ftr-link" href="#!">
								Media Enquiries
							</Link>
							<Link className="ftr-link" href="#!">
								Other Services
							</Link>
						</div>

						<div className="flex flex-col gap-2 text-center sm:text-left">
							<span className="mb-3 font-bold">Store Details</span>
							<Link href="tel:+800 1234 56" className="mb-2 flex items-center gap-4">
								<figure className="rounded-full bg-gray-400 p-3 ">
									<svg
										fill="white"
										className="h-6 w-6"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
											clipRule="evenodd"
										/>
									</svg>
								</figure>
								<div className="flex flex-col">
									<span>Need Any help?</span>
									<span className="text-xl font-normal">(+800) 1234 56</span>
								</div>
							</Link>

							<p>
								<span className="mr-2 font-medium">Address:</span>
								502 New Design Str, <br /> Melbourne, Australia
							</p>

							<a href="mailto:alukas@domain.com">
								<span className="mr-2 font-medium">Email:</span> alukas@domain.com
							</a>
						</div>
					</div>
				</div>

				<ScrollTop />
			</footer>

			<div className="flex  flex-col items-center justify-center gap-2 border-t py-10">
				<Image src={payments} alt="payments" />
				<p>Copyright © Allukas all rights reserved.</p>
			</div>
		</>
	);
};

export default Footer;
