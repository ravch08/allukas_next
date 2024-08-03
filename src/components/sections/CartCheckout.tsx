const CartCheckout = () => {
	return (
		<div className="border border-black py-6 px-4 flex flex-col col-span-3">
			<h3 className="text-xl font-medium mb-4">Cart Totals</h3>
			<div className="flex items-center justify-between gap-4 py-4 border-b border-slate-200">
				<p>Subtotal</p>
				<span>$1500</span>
			</div>
			<div className="flex items-center justify-between gap-4 py-4 border-b border-slate-200">
				<p>Shipping</p>
				<div className="flex flex-col gap-2">
					<span className="text-sm pr-12">Flat Rate</span>
					<span className="text-sm pr-12">Shipping to CA</span>
					<span className="text-sm pr-12">Change Address</span>
				</div>
			</div>
			<div className="flex items-center justify-between gap-4 py-4 border-b border-slate-200">
				<p>Total</p>
				<span className="text-xl font-semibold">$1500</span>
			</div>

			<button className="btn-black">Proceed to Checkout</button>
		</div>
	);
};

export default CartCheckout;
