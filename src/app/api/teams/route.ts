import { teams } from "@/components/utils/data";

export async function GET() {
	return Response.json(teams);
}
