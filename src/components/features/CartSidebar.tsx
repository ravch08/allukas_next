import Link from "next/link";

import useCartStore from "../../store/useCartStore";
import CartProductDetail from "./CartProductDetail";

export type CartSidebarProps = {
	isCartOpen: boolean;
	setIsCartOpen: (value: boolean) => void;
};

const CartSidebar = ({ isCartOpen, setIsCartOpen }: CartSidebarProps) => {
	const { cartItems } = useCartStore();

	const totalPrice = cartItems.reduce((acc, cur) => acc + cur.quantity! * parseFloat(cur.price), 0);

	const sidebarClass = `w-full lg:w-1/4 h-screen z-50 transition-all ease-in-out duration-500 flex flex-col gap-4 justify-between bg-white absolute shadow-md top-0 ${
		isCartOpen ? "right-0" : "-right-[100%]"
	}`;

	return (
		<div className={sidebarClass}>
			<div className="flex flex-col items-start gap-6">
				<div className="p-6 w-full bg-slate-100 flex items-center justify-between gap-4">
					<p className="text-2xl">
						Your Cart <span>({cartItems.length})</span>
					</p>

					<button className="italic font-semibold" onClick={() => setIsCartOpen(false)}>
						close
					</button>
				</div>

				{cartItems.length === 0 ? (
					<p className="text-center p-6">😔 Your Cart is Empty! Add products.</p>
				) : null}

				<ul className="px-6 w-full list-none flex flex-col gap-6 items-start overflow-auto h-[72vh]">
					{cartItems?.map((item) => (
						<CartProductDetail
							id={item.id!}
							key={item.id}
							title={item.title}
							price={item.price}
							imgSrc={item.imgSrc1}
							quantity={item.quantity!}
						/>
					))}
				</ul>
			</div>

			<div className="py-6 px-8 flex flex-col gap-4 border-t border-slate-200">
				<div className="flex items-center justify-between gap-4">
					<span>SubTotal:</span>
					<span className="font-semibold">${totalPrice}</span>
				</div>
				<Link
					href="cart"
					onClick={() => setIsCartOpen(false)}
					className="text-center w-full py-4 btn-black"
				>
					View Cart
				</Link>
			</div>
		</div>
	);
};

export default CartSidebar;
