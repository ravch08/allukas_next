import { CategoryProps, ProductsProps } from "@/types/types";

export function getProductDetails(products: ProductsProps[]) {
	const uniqueCategories = {} as { [key: string]: string };

	products?.forEach((product: ProductsProps) => {
		product?.categories!.forEach((category) => {
			if (!uniqueCategories[category]) {
				uniqueCategories[category] = product.imgSrc1;
			}
		});
	});

	const categoriesArray: CategoryProps[] = Object.keys(uniqueCategories)
		.map((category) => ({
			category: category,
			catImgSrc: uniqueCategories[category],
		}))
		.filter(
			(cat) =>
				cat.category !== "new arrivals" &&
				cat.category !== "featured" &&
				cat.category !== "bestseller"
		);

	const newArrivals = products?.filter((prod: ProductsProps) =>
		prod.categories!.includes("new arrivals")
	);

	const featuredProducts = products?.filter((prod: ProductsProps) =>
		prod.categories!.includes("featured")
	);

	const sortedTitleProducts = products?.reduce(
		(sortedArray: ProductsProps[], currentProduct: ProductsProps) => {
			const index = sortedArray.findIndex(
				(product: ProductsProps) => product.title.localeCompare(currentProduct.title) > 0
			);

			index === -1
				? sortedArray.push(currentProduct)
				: sortedArray.splice(index, 0, currentProduct);

			return sortedArray;
		},
		[]
	);

	const sortedPriceProducts = products?.reduce(
		(sortedArray: ProductsProps[], currentProduct: ProductsProps) => {
			const index = sortedArray.findIndex(
				(product: ProductsProps) => parseFloat(product.price) > parseFloat(currentProduct.price)
			);

			index === -1
				? sortedArray.push(currentProduct)
				: sortedArray.splice(index, 0, currentProduct);

			return sortedArray;
		},
		[]
	);

	return {
		newArrivals,
		featuredProducts,
		categoriesArray,
		sortedPriceProducts,
		sortedTitleProducts,
	};
}
