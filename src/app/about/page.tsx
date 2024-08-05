import {
	OurMission,
	OurStory,
	OurTeam,
	PagesBanner,
	SalesFeatures,
} from "../../components/utils/helper";

export const metadata = {
	title: "About Us | Allukas",
};

const AboutPage = () => {
	return (
		<main>
			<PagesBanner
				pageTitle="About Our Online Store"
				subTitle="Alukas providing rare & beautiful items sourced both locally & globally."
			/>
			<OurStory />
			<OurMission />
			<OurTeam />
			<SalesFeatures />
		</main>
	);
};

export default AboutPage;
