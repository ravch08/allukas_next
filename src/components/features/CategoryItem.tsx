import Image from "next/image";
import Link from "next/link";
import { CategoriesProps } from "../sections/Categories";

const CategoryItem = ({ title, imgSrc, slug }: CategoriesProps) => {
	return (
		<Link href={`categories/${slug}`} className="group flex flex-col items-center">
			<figure className="w-44 overflow-hidden rounded-full">
				<Image src={imgSrc} alt={title} width={200} height={200} className="w-full" />
			</figure>
			<h3 className="mt-4 font-medium uppercase transition-colors duration-300 ease-in-out group-hover:text-yellow-700">
				{title}
			</h3>
		</Link>
	);
};

export default CategoryItem;
