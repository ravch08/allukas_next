import useCartStore from "@/store/useCartStore";
import { ProductsProps } from "@/types/types";

export function getProductDetails(products: ProductsProps[], sortOption = "all") {
	console.log(products);

	const setProducts = useCartStore.getState().setProducts;
	setProducts(products);

	const newArrivals = products?.filter((prod: ProductsProps) => prod.isNewArrival);
	const featuredProducts = products?.filter((prod: ProductsProps) => prod.isFeatured);

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
				(product: ProductsProps) => product.price > currentProduct.price
			);

			index === -1
				? sortedArray.push(currentProduct)
				: sortedArray.splice(index, 0, currentProduct);

			return sortedArray;
		},
		[]
	);

	let finalProducts;

	if (sortOption === "all") {
		finalProducts = products;
	} else if (sortOption === "newArrivals") {
		finalProducts = products?.filter((prod: ProductsProps) => prod.isNewArrival);
	} else if (sortOption === "featured") {
		finalProducts = products?.filter((prod: ProductsProps) => prod.isFeatured);
	} else if (sortOption === "az") {
		finalProducts = sortedTitleProducts;
	} else if (sortOption === "za") {
		finalProducts = sortedTitleProducts.reverse();
	} else if (sortOption === "lh") {
		finalProducts = sortedPriceProducts;
	} else if (sortOption === "hl") {
		finalProducts = sortedPriceProducts.reverse();
	}

	return {
		newArrivals,
		featuredProducts,
		sortedPriceProducts,
		sortedTitleProducts,
		finalProducts,
	};
}
