import prisma from "@/lib/db";
import { CategoriesProps } from "@/types/types";
import { CategoryItem, SectionHeading } from "../utils/helper";

const Categories = async () => {
	const categories = await prisma.category.findMany();

	return (
		<section aria-labelledby="Categories">
			<div className="container mx-auto px-8">
				<SectionHeading
					heading="Popular Categories"
					subHeading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem numquam quia incidunt!"
				/>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
					{categories?.map((cat: CategoriesProps) => (
						<CategoryItem key={cat.id} title={cat.title} imgSrc={cat.imgSrc} slug={cat.slug} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Categories;
