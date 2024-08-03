import {
	OurMission,
	OurStory,
	OurTeam,
	PagesBanner,
	SalesFeatures,
} from "../../components/utils/helper";

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
