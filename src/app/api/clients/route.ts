import { clients } from "@/components/utils/data";

export async function GET() {
	return Response.json(clients);
}
