import { CategoryArrProps, CategoryProps } from "../../types/types";
import { CategoryItem, SectionHeading } from "../utils/helper";

const Categories = ({ categoryArr }: CategoryArrProps) => {
	return (
		<section aria-labelledby="Categories">
			<div className="container mx-auto px-8">
				<SectionHeading
					heading="Popular Categories"
					subHeading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem numquam quia incidunt!"
				/>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
					{categoryArr.length &&
						categoryArr?.map((cat: CategoryProps) => (
							<CategoryItem key={cat.category} category={cat.category} catImgSrc={cat.catImgSrc} />
						))}
				</div>
			</div>
		</section>
	);
};

export default Categories;
