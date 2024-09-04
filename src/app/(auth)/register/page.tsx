import { Metadata } from "next";
import { PagesBanner, RegisterForm } from "../../../components/utils/helper";

export const metadata: Metadata = {
	title: "Register | Umino - A Modern Store",
};

const Register = () => {
	return (
		<main>
			<PagesBanner pageTitle="Register" subTitle="WELCOME TO UMINO" />
			<RegisterForm />
		</main>
	);
};

export default Register;
