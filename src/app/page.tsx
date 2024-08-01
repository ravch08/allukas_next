import { products } from "@/components/utils/data";
import { getProductDetails } from "@/components/utils/getProductDetails";
import {
	Banner,
	Categories,
	Clients,
	FollowUs,
	MiniBanner,
	SalesFeatures,
	SortedProducts,
	StoresNearYou,
	Testimonials,
} from "../components/utils/helper";

export default function Home() {
	const { newArrivals, categoriesArray, featuredProducts } = getProductDetails(products);

	return (
		<main>
			<Banner />
			<Categories categoryArr={categoriesArray} />
			<SortedProducts
				products={newArrivals}
				heading={"New Arrivals"}
				subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas neque nulla aliquid veniam rerum."
			/>
			<MiniBanner />
			<StoresNearYou />
			<SortedProducts
				products={featuredProducts}
				heading={"Featured Products"}
				subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas neque nulla aliquid veniam rerum."
			/>
			<Testimonials />
			<Clients />
			<FollowUs />
			<SalesFeatures />
		</main>
	);
}
