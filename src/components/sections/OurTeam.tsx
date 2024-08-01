import { TeamProps } from "@/types/types";
import { teams } from "../utils/data";

import { SectionHeading, TeamItem } from "../utils/helper";

const OurTeam = () => {
	return (
		<section aria-labelledby="Our Team">
			<div className="container mx-auto px-12">
				<SectionHeading
					heading="The Leader Board Of Our Company"
					subHeading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit blanditiis optio voluptate sit! Consequatur, blanditiis!"
				/>

				<div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
					{teams?.map((team: TeamProps) => (
						<TeamItem
							key={team.id}
							title={team.title}
							imgSrc={team.imgSrc}
							designation={team.designation}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
