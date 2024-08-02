import Image from "next/image";

const CartProductDetail = () => {
	return (
		<div className="flex items-start justify-between">
			<figure>
				<Image src="" alt="" />
			</figure>
			<div className="flex flex-col gap-1 items-start">
				<p>Birds of Paradise Pendant</p>
				<div className="flex">
					<button>-</button>
					<span>4</span>
					<button>+</button>
				</div>
				<div className="flex">
					<span>2</span>
					<span>x</span>
					<span>$159</span>
				</div>
			</div>

			<button>
				<svg
					fill="none"
					strokeWidth={1.5}
					className="size-6"
					viewBox="0 0 24 24"
					stroke="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
			</button>
		</div>
	);
};

export default CartProductDetail;
