import styled from "styled-components";
import Product from "./Product";

const StyledProduct = styled(Product)`
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  width: 230px;
  height: 360px;
  font-family: Arial;
  font-size: 12px;

  :hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  }

  > img {
    width: 80%;
  }

  > .product-general {
    > p {
      margin: 3px;
    }

    > .name {
      color: rgb(77, 77, 77);
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    > .size {
      color: rgb(151, 151, 151);
      font-size: 12px;
    }

    padding: 6px 0;
  }

  > .product-price {
    > p {
      margin: 3px;
    }

    > .by-unit {
      color: rgb(53, 119, 92);
      font-size: 15px;
    }

    > .by-size {
      color: rgb(151, 151, 151);
      font-size: 10px;
    }

    padding: 6px 0;
  }

  > .product-tools {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 6px 0;
  }

  > .product-tools > .add-chart-button:hover {
    background: rgb(67, 146, 113);
  }

  > .product-tools > .add-chart-button {
    background: rgb(53, 119, 92);
    border: 0;
    border-radius: 3.5px;
    color: white;
    font-size: 12px;
    height: 41px;
    outline: 0;
    padding: 3px 10px;
    width: 160px;
  }

  > .product-tools > .edit-quantity-buttons:hover {
    background-color: rgb(245, 245, 245);
  }

  > .product-tools > .edit-quantity-buttons {
    background: transparent;
    border: 0.5px solid rgb(245, 245, 245);
    border-radius: 4px;
    color: rgb(53, 119, 92);
    font-size: 16px;
    height: 41px;
    outline: 0;
    padding: 6px 18px;
    transition: 0.15s;
  }

  > .product-tools > .product-quantity {
    font-size: 20px;
    line-height: 40px;
    margin: 0;
    width: 60px;
  }
`;

export default StyledProduct;
