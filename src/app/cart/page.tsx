import { CartLayout, PagesBanner } from "../../components/utils/helper";

export const metadata = {
	title: "Your Cart | Allukas",
};

const CartPage = () => {
	return (
		<main>
			<PagesBanner
				pageTitle="Cart"
				subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptate! Sunt quam sint odio."
			/>
			<CartLayout />
		</main>
	);
};

export default CartPage;
