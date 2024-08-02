import Link from "next/link";

export type CartSidebarProps = {
	isCartOpen: boolean;
	setIsCartOpen: (value: boolean) => void;
};

const CartSidebar = ({ isCartOpen, setIsCartOpen }: CartSidebarProps) => {
	const sidebarClass = `w-full lg:w-1/5 h-screen z-50 transition-all ease-in-out duration-500 flex flex-col gap-4 justify-between bg-white fixed shadow-md top-0 ${
		isCartOpen ? "right-0" : "-right-[100%]"
	}`;

	return (
		<div className={sidebarClass}>
			<div className="py-6 bg-slate-100 px-8 flex items-center justify-between gap-4">
				<p className="text-2xl">
					Your Cart <span>(10)</span>
				</p>

				<button className="italic font-semibold" onClick={() => setIsCartOpen(false)}>
					close
				</button>
			</div>

			<ul className="py-6 px-8 list-none flex flex-col gap-6 items-start"></ul>

			<div className="py-6 px-8 flex flex-col gap-4 border-t border-slate-200">
				<div className="flex items-center justify-between gap-4">
					<span>SubTotal:</span>
					<span className="font-semibold">$1,536.00</span>
				</div>
				<Link
					href="cart"
					className=" text-center w-full py-4 border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
				>
					View Cart
				</Link>
			</div>
		</div>
	);
};

export default CartSidebar;
