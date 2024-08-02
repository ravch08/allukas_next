import { ReactNode } from "react";

export type TeamProps = {
	id?: string;
	title: string;
	designation: string;
	imgSrc: string;
};

export type TestimonialProps = {
	id?: string;
	rating: number;
	author: string;
	imgSrc: string;
	review: string;
};

export type ProductsProps = {
	id?: string;
	title: string;
	brand: string;
	price: string;
	rating: string;
	quantity?: number;
	categories?: string[];
	priceCrossed: string;
	imgSrc1: string;
	imgSrc2: string;
};

export type SectionHeadingProps = {
	heading: string;
	subHeading: string;
};

export type RatingsProps = {
	stars: number;
};

export type CategoryProps = {
	catImgSrc: string;
	category: string;
};

export type CategoryArrProps = {
	categoryArr: CategoryProps[];
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
