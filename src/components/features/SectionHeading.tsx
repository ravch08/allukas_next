import { SectionHeadingProps } from "../../types/types";

const SectionHeading = ({ heading, subHeading }: SectionHeadingProps) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-2">{heading}</h2>
      <p className="text-gray-600">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
