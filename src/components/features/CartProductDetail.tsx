import useCartStore from "@/hooks/useCartStore";
import { CartProducts } from "@/types/types";
import Image from "next/image";

const CartProductDetail = ({ id, imgSrc, title, price, quantity }: CartProducts) => {
	const { incrementQuantity, decrementQuantity, removeFromCart } = useCartStore();

	return (
		<li className="w-full flex items-center gap-4 relative border-b border-slate-100 pb-4">
			<figure>
				<Image src={imgSrc} alt={title} width={70} height={70} />
			</figure>

			<div className="overflow-clip flex flex-col gap-2 items-start">
				<p>{title}</p>
				<div className="flex items-center gap-2">
					<button className="bg-slate-500 p-2" onClick={() => decrementQuantity(id)}>
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-3 h-3 fill-white"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
					<span>{quantity}</span>
					<button className="bg-slate-500 p-2" onClick={() => incrementQuantity(id)}>
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-3 h-3 fill-white"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<div className="flex font-medium gap-2 mt-2">
					<span>{quantity}</span>
					<span>x</span>
					<span>${price}</span>
				</div>
			</div>

			<button className="absolute top-2 right-4" onClick={() => removeFromCart(id)}>
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
		</li>
	);
};

export default CartProductDetail;
