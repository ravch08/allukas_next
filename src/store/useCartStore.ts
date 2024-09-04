import { ProductsProps } from "@/types/types";
import { create } from "zustand";

interface CartState {
	cartItems: ProductsProps[];
	wishlistItems: ProductsProps[];
	products: ProductsProps[];

	setProducts: (products: ProductsProps[]) => void;
	addToCart: (idx: string) => void;
	removeFromCart: (idx: string) => void;
	incrementQuantity: (idx: string) => void;
	decrementQuantity: (idx: string) => void;
	toggleFromWishlist: (idx: string) => void;
}

const useCartStore = create<CartState>((set, get) => ({
	products: [],
	cartItems: [],
	wishlistItems: [],

	setProducts: (products) => {
		set({ products });
	},

	addToCart: (idx) => {
		const { products } = get();
		const itemExists = get().cartItems.find((cartItem) => cartItem.id === idx);

		if (itemExists) {
			if (typeof itemExists.quantity === "number") {
				itemExists.quantity++;
			}

			set({ cartItems: [...get().cartItems] });
		} else {
			const selectedItem = products.find((prod) => prod.id === idx);
			selectedItem && set({ cartItems: [...get().cartItems, { ...selectedItem, quantity: 1 }] });
		}
	},

	removeFromCart: (idx) => {
		const itemExists = get().cartItems.find((cartItem) => cartItem.id === idx);

		if (itemExists) {
			const newCartItems = get().cartItems.filter((item) => item.id !== idx);
			set({ cartItems: newCartItems });
		}
	},

	toggleFromWishlist: (idx) => {
		const { products } = get();
		const itemExists = get().wishlistItems.find((item) => item.id === idx);

		if (itemExists) {
			const updatedWishlist = get().wishlistItems.filter((item) => item.id !== idx);
			set({ wishlistItems: updatedWishlist });
		} else {
			const selectedItem = products.find((item: ProductsProps) => item.id === idx);
			selectedItem && set({ wishlistItems: [...get().wishlistItems, selectedItem] });
		}
	},

	incrementQuantity: (idx) => {
		const itemExists = get().cartItems.find((cartItem) => cartItem.id === idx);

		if (itemExists && typeof itemExists.quantity === "number" && itemExists.quantity > 0) {
			itemExists.quantity++;
			set({ cartItems: get().cartItems });
		}
	},

	decrementQuantity: (idx) => {
		const itemExists = get().cartItems.find((cartItem) => cartItem.id === idx);

		if (itemExists && typeof itemExists.quantity === "number" && itemExists.quantity > 0) {
			itemExists.quantity--;
			set({ cartItems: get().cartItems });
		}
	},
}));

export default useCartStore;
