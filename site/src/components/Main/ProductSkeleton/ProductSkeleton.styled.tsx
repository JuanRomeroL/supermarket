import styled from "styled-components";
import ProductSkeleton from "./ProductSkeleton";

const ProductSkeletonStyled = styled(ProductSkeleton)`
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  width: 230px;
  height: 334px;

  > .product-general {
    padding: 6px 0;
  }

  > .product-price {
    padding: 6px 0;
  }

  > .product-tools {
    padding: 6px 0 0;
  }
`;

export default ProductSkeletonStyled;
