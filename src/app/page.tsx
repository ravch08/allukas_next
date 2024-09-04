import { getProductDetails } from "@/components/utils/getProductDetails";
import prisma from "@/lib/db";

import {
	Banner,
	Categories,
	Clients,
	FollowUs,
	MiniBanner,
	ProductsInitializer,
	SalesFeatures,
	SortedProducts,
	StoresNearYou,
	Testimonials,
} from "../components/utils/helper";

export default async function Home() {
	const products = await prisma.product.findMany();
	const { newArrivals, featuredProducts } = getProductDetails(products);

	return (
		<main>
			<Banner />
			<Categories />
			<ProductsInitializer products={products} />
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
