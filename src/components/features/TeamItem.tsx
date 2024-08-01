import { TeamProps } from "@/types/types";
import Image from "next/image";

const TeamItem = ({ imgSrc, title, designation }: TeamProps) => {
	return (
		<div>
			<figure className="overflow-hidden rounded-md">
				<Image
					alt={title}
					src={imgSrc}
					width={400}
					height={500}
					className="w-full scale-100 transition-transform duration-300 ease-in-out hover:scale-110"
				/>
			</figure>
			<h3 className="mt-4 text-xl font-normal"> {title}</h3>
			<span className="text-gray-400">{designation}</span>
		</div>
	);
};

export default TeamItem;
