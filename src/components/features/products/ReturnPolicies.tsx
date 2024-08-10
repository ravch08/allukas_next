const ReturnPolicies = () => {
	return (
		<div aria-labelledby="Return Policies" className="mt-12 flex flex-col gap-4">
			<p>
				Returns will be accepted for up to 10 days of Customer’s receipt or tracking number on
				unworn items. You, as a Customer, are obliged to inform us via email before you return the
				item, only in the case of:
			</p>

			<ul className="my-4 flex flex-col gap-2 pl-4">
				<li>– Received the wrong item.</li>
				<li>– Item arrived not as expected (ie. damaged packaging).</li>
				<li>– Item had defects.</li>
				<li>– Over delivery time.</li>
				<li>– The shipper does not allow the goods to be inspected before payment.</li>
			</ul>

			<p>
				The returned product(s) must be in the original packaging, safety wrapped, undamaged and
				unworn. This means that the item(s) must be safely packed in a carton box for protection
				during transport, possibly the same carton used to ship to you as a customer.
			</p>
		</div>
	);
};

export default ReturnPolicies;
