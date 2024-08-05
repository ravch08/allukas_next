import { PagesBanner, WishlistProductList } from "../../components/utils/helper";

export const metadata = {
	title: "Your Wishlist | Allukas",
};

const WishlistPage = () => {
	return (
		<main>
			<PagesBanner
				pageTitle="Wishlist"
				subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptate! Sunt quam sint odio."
			/>
			<WishlistProductList />
		</main>
	);
};

export default WishlistPage;
