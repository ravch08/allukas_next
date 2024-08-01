import Image from "next/image";
import Link from "next/link";

import { CategoryProps } from "../../types/types";

const CategoryItem = ({ catImgSrc, category }: CategoryProps) => {
	return (
		<Link href={"#!"} className="group flex flex-col items-center">
			<figure className="w-44 overflow-hidden rounded-full">
				<Image src={catImgSrc} alt={category} width={200} height={200} className="w-full" />
			</figure>
			<h3 className="mt-4 font-medium uppercase transition-colors duration-300 ease-in-out group-hover:text-yellow-700">
				{category}
			</h3>
		</Link>
	);
};

export default CategoryItem;
