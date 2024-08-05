import Image from "next/image";

import { ProductsProps } from "@/types/types";
import { ProductInfo } from "../../utils/helper";

const SingleProductDetail = ({ selectedProduct }: { selectedProduct: ProductsProps }) => {
	if (!selectedProduct) return;

	return (
		<section>
			<div className="container mx-auto px-8">
				<div className="relative grid grid-cols-1 gap-12 xl:grid-cols-2">
					<div className="flex items-start gap-2">
						<div className="flex flex-col gap-2">
							<button>
								<Image
									width={80}
									height={80}
									alt="image thumbnail"
									src={selectedProduct?.imgSrc1}
									className="ring-1 ring-gray-700"
								/>
							</button>
							<button>
								<Image
									width={80}
									height={80}
									alt="image thumbnail"
									src={selectedProduct?.imgSrc2}
									className="ring-1 ring-gray-700"
								/>
							</button>
						</div>

						<Image
							priority
							width={560}
							height={560}
							className="w-full"
							alt={selectedProduct?.title}
							src={selectedProduct?.imgSrc1}
						/>
					</div>

					<ProductInfo product={selectedProduct} />
				</div>
			</div>
		</section>
	);
};

export default SingleProductDetail;
