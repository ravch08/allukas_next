import { useQuery } from "@tanstack/react-query";
import { NavLink, Outlet, useParams } from "react-router-dom";

import { getProducts } from "../../utils/api";
import { Loading, ProductInfo } from "../../utils/helper";
import { ProductsProps } from "../Home";

const ProductDetail = () => {
  const { id } = useParams();

  const {
    data: products,
    status,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const selectedProduct = products?.find(
    (prod: ProductsProps) => prod.id === id,
  );

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "error") {
    return (
      <p className="w-full bg-red-400 p-4 text-center text-white">
        {error.message}
      </p>
    );
  }

  return (
    <section aria-labelledby="product detail">
      <div className="container mx-auto px-8">
        {status === "success" ? (
          <div className="relative grid grid-cols-1 gap-12 xl:grid-cols-2">
            <div className="flex items-start gap-2">
              <div className="flex flex-col gap-2">
                <button>
                  <img
                    alt="image thumbnail"
                    src={selectedProduct.imgSrc1}
                    className="w-20 ring-1 ring-gray-700"
                  />
                </button>
                <button>
                  <img
                    alt="image thumbnail"
                    src={selectedProduct.imgSrc2}
                    className="w-20 ring-1 ring-gray-700"
                  />
                </button>
              </div>

              <img
                className="w-full"
                alt={selectedProduct.title}
                src={selectedProduct.imgSrc1}
              />
            </div>

            <ProductInfo product={selectedProduct} />
          </div>
        ) : null}
      </div>

      <div className="container mx-auto mb-10 mt-24 px-8">
        <div className="flex items-center justify-center gap-12 border-b border-gray-300">
          <NavLink className="prodinfo-link" to="." end>
            Description
          </NavLink>
          <NavLink className="prodinfo-link" to="reviews">
            Customer Reviews
          </NavLink>
          <NavLink className="prodinfo-link" to="shipping">
            Shiping & Returns
          </NavLink>
          <NavLink className="prodinfo-link" to="return-policies">
            Return Policies
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default ProductDetail;
