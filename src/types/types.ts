import { ReactNode } from "react";
import { boolean, date, number, string, z } from "zod";

// Zod Types -------------------------------------------------------------

export const productsSchema = z.object({
	id: string(),
	createdAt: date(),
	title: string(),
	imgSrc1: string(),
	imgSrc2: string(),
	rating: number()
		.gte(1, { message: "Cannot be less than 1" })
		.lte(5, { message: "Cannot be more than 5" }),
	price: number().nonnegative(),
	priceCrossed: number().nullable(),
	brand: string(),
	quantity: number().optional(),
	isFeatured: boolean(),
	isNewArrival: boolean(),
	catSlug: string(),
});

export const categoriesSchema = z.object({
	id: z.string().optional(),
	createdAt: z.date().optional(),
	title: z.string(),
	imgSrc: z.string(),
	slug: z.string(),
	products: z.string().optional(),
});

export type CategoriesProps = z.infer<typeof categoriesSchema>;

export type ProductsProps = z.infer<typeof productsSchema>;

// Declared Types -------------------------------------------------------------

export type TeamProps = {
	id?: string;
	title: string;
	designation: string;
	imgSrc: string;
};

export type ProductsParamsProps = {
	params: {
		productID: string;
	};
};

export type TestimonialProps = {
	id?: string;
	rating: number;
	author: string;
	imgSrc: string;
	review: string;
};

export type CartProducts = {
	id: string;
	title: string;
	price: string;
	quantity: number;
	imgSrc: string;
};

export type SectionHeadingProps = {
	heading: string;
	subHeading: string;
};

export type RatingsProps = {
	stars: string;
};

export type PageBannerProps = {
	pageTitle: string;
	subTitle: string;
};

export type ErrorProps = {
	errorMsg: string;
};

export type ProductCompProps = {
	products: ProductsProps[];
};

export type ProductInfoProps = {
	product: ProductsProps;
};

export type SortedProductProps = {
	heading: string;
	subHeading: string;
	products: ProductsProps[];
};

export type ModalProps = {
	children: ReactNode;
	modalTitle: string;
	handleClose: () => void;
};

export type ModalCompProps = {
	closeModal: () => void;
};

export type OverlayCompProps = {
	handleClose: () => void;
};
