import { FilteredProducts, PagesBanner } from "../../components/utils/helper";

export const metadata = {
	title: "Products | Allukas",
};

const ProductsPage = () => {
	return (
		<main>
			<PagesBanner
				pageTitle="Products"
				subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptate! Sunt quam sint odio."
			/>

			<FilteredProducts />
		</main>
	);
};

export default ProductsPage;
