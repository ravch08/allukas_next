import { getProductDetails } from "@/components/utils/getProductDetails";
import useCartStore from "@/store/useCartStore";
import { ProductsProps } from "@/types/types";
import ProductItem from "./ProductItem";

export type ProductListProps = {
	sortOption: string;
};

const ProductsList = ({ sortOption }: ProductListProps) => {
	const products = useCartStore((state) => state.products);

	const { finalProducts } = getProductDetails(products, sortOption);

	return (
		<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{finalProducts?.map((prod: ProductsProps) => (
				<ProductItem
					key={prod.id}
					id={prod.id}
					brand={prod.brand}
					title={prod.title}
					price={prod.price}
					rating={prod.rating}
					imgSrc1={prod.imgSrc1}
					imgSrc2={prod.imgSrc2}
					priceCrossed={prod.priceCrossed}
				/>
			))}
		</div>
	);
};

export default ProductsList;
