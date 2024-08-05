import { Metadata } from "next";

import { products } from "@/components/utils/data";
import { ProductMoreInfo, SingleProductDetail } from "@/components/utils/helper";
import { ProductsParamsProps, ProductsProps } from "@/types/types";

export const generateMetadata = ({ params }: ProductsParamsProps): Metadata => {
	const title = products.find((item) => item.id === params.productID)?.title;

	return {
		title: `${title} | Allukas`,
	};
};

const ProductDetail = ({ params }: ProductsParamsProps) => {
	const selectedProduct = products?.find(
		(product: ProductsProps) => product.id === params.productID
	);

	if (!selectedProduct) return;

	return (
		<main>
			<SingleProductDetail selectedProduct={selectedProduct} />
			<ProductMoreInfo />
		</main>
	);
};

export default ProductDetail;
