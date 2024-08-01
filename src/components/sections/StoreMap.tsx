const StoreMap = () => {
	return (
		<section aria-labelledby="Store locations">
			<div className="container mx-auto px-8">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6309.787482905531!2d144.813771!3d-37.745637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65fa6debeb781%3A0xe1d23f5d1759961e!2s184%20Main%20Rd%20E%2C%20St%20Albans%20VIC%203021%2C%20%C3%9Ac!5e0!3m2!1svi!2sus!4v1716010109732!5m2!1svi!2sus"
					className="h-96 w-full"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>

				<div className="mt-12 grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div className="flex flex-col items-center justify-center p-4">
						<svg
							fill="none"
							strokeWidth={1.5}
							viewBox="0 0 24 24"
							className="h-10 w-10"
							stroke="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
						<h3 className="pb-2 pt-4 font-medium uppercase">BUSNESS HOURS</h3>
						<p>Monday - Sunday</p>
						<p>09:00 am - 20:00 pm</p>
					</div>

					<div className="flex flex-col items-center justify-center p-4">
						<svg
							fill="none"
							strokeWidth={1.5}
							viewBox="0 0 24 24"
							className="h-10 w-10"
							stroke="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
							/>
						</svg>
						<h3 className="pb-2 pt-4 font-medium uppercase">CONTACT INFO</h3>
						<p>
							<span className="font-medium">Telephone:</span> +12 703 172 3412
						</p>
						<p>
							<span className="font-medium">E-mail:</span> hello@example.com
						</p>
					</div>

					<div className="flex flex-col items-center justify-center p-4">
						<svg
							fill="none"
							strokeWidth={1.5}
							className="h-10 w-10"
							viewBox="0 0 24 24"
							stroke="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
							/>
						</svg>

						<h3 className="pb-2 pt-4 font-medium uppercase">OUR STORE</h3>
						<p>7021 Washington SQ.</p>
						<p>South New York, NY 10012</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StoreMap;
