import { testimonials } from "@/components/utils/data";

export async function GET() {
	return Response.json(testimonials);
}
