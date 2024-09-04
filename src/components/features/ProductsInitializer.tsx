"use client"; // This is crucial to ensure it's a client component

import useCartStore from "@/store/useCartStore";
import { ProductsProps } from "@/types/types";
import { useEffect } from "react";

interface ProductsInitializerProps {
	products: ProductsProps[];
}

const ProductsInitializer = ({ products }: ProductsInitializerProps) => {
	const setProducts = useCartStore((state) => state.setProducts);

	useEffect(() => {
		setProducts(products);
	}, [products, setProducts]);

	return null;
};

export default ProductsInitializer;
