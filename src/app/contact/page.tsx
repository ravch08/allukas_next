import { ContactForm, PagesBanner, SalesFeatures, StoreMap } from "../../components/utils/helper";

const Contact = () => {
	return (
		<main>
			<PagesBanner
				pageTitle="Contact"
				subTitle="Click on your neares store location below to set the road on Google Map."
			/>
			<StoreMap />
			<ContactForm />
			<SalesFeatures />
		</main>
	);
};

export default Contact;
