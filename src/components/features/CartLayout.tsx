"use client";

import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";

import useCartStore from "@/hooks/useCartStore";
import { CartCheckout } from "../../components/utils/helper";

export type CartColumnProps = {
	id?: string;
	title: string;
	brand?: string;
	price: string;
	rating?: string;
	quantity?: number;
	categories?: string[];
	priceCrossed?: string;
	imgSrc1: string;
	imgSrc2?: string;
} & { subtotal: number };

const columnHelper = createColumnHelper<CartColumnProps>();

const columns = [
	columnHelper.accessor("imgSrc1", {
		header: "PRODUCT",
		cell: (props) => <Image src={props.getValue()} alt="name" width={60} height={60} />,
	}),
	columnHelper.accessor("title", {
		header: "TITLE",
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor("price", {
		header: "PRICE",
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor("quantity", {
		header: "QUANTITY",
		cell: (props) => props.row.original?.quantity!,
	}),
	columnHelper.accessor("subtotal", {
		header: "SUBTOTAL",
		cell: (props) => {
			return `$${props.row.original?.quantity! * parseFloat(props.row.original?.price)}`;
		},
	}),
];

const CartLayout = () => {
	const { cartItems, removeFromCart } = useCartStore();

	const table = useReactTable({
		data: cartItems,
		columns,
		debugTable: true,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="container mx-auto py-20">
			<div className="grid grid-cols-3 gap-8">
				<table width={table.getTotalSize()} className="col-span-2">
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id} className="border-y border-slate-200">
								{headerGroup.headers.map((header) => (
									<td
										key={header.id}
										width={header.getSize()}
										className="py-4 px-4 font-bold text-left text-sm"
									>
										{flexRender(header.column.columnDef.header, header.getContext())}
									</td>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row) => (
							<tr key={row.id} className="last:border-b-0 relative">
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id} width={cell.column.getSize()} className="px-4 py-4 border-b ">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
								<button
									onClick={() => removeFromCart(row.original?.id!)}
									className="absolute top-[2.2rem] right-2"
								>
									<svg
										fill="none"
										strokeWidth={1.5}
										className="size-6"
										viewBox="0 0 24 24"
										stroke="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
										/>
									</svg>
								</button>
							</tr>
						))}
					</tbody>
				</table>

				<CartCheckout />
			</div>
		</div>
	);
};

export default CartLayout;
