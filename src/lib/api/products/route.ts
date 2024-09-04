import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
	try {
		const products = await prisma.product.findMany();
		return new NextResponse(JSON.stringify(products), { status: 200 });
	} catch (error) {
		console.log(error);
		return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
	}
};

export const POST = () => {
	return new NextResponse("Hello", { status: 200 });
};
