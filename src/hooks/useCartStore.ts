import { products } from "@/components/utils/data";
import { ProductsProps } from "@/types/types";
import { create } from "zustand";

interface CartState {
	cartItems: ProductsProps[];
	totalPrice: number;
	addToCart: (idx: string) => void;
	getTotalPrice: () => void;
	removeFromCart: (idx: string) => void;
	incrementQuantity: (idx: string) => void;
	decrementQuantity: (idx: string) => void;
}

const useCartStore = create<CartState>((set, get) => ({
	cartItems: [],
	totalPrice: 0,

	addToCart: (idx) => {
		const itemExists = get().cartItems.find((cartItem) => cartItem.id === idx);

		if (itemExists) {
			if (typeof itemExists.quantity === "number") {
				itemExists.quantity++;
			}

			set({ cartItems: [...get().cartItems] });
		} else {
			const product = products.find((prod) => prod.id === idx);
			set({ cartItems: [...get().cartItems, { ...product, quantity: 1 }] });
		}
	},

	removeFromCart: (idx) => {
		const itemExists = get().cartItems.find((cartItem) => cartItem.id === idx);

		if (itemExists) {
			const newCartItems = get().cartItems.filter((item) => item.id !== idx);
			set({ cartItems: newCartItems });
		}
	},

	getTotalPrice: () => {
		const totalPrice = get().cartItems.reduce((acc, cur) => acc + parseFloat(cur.price), 0);
		set({ totalPrice: totalPrice });
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
