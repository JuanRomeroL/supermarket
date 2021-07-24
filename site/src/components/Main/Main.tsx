import React from "react";
import { fetchProducts } from "../../api/product";
import Error from "./Error";
import Product from "./Product";
import ProductSkeleton from "./ProductSkeleton";
import SearchBar from "../SearchBar";
import "./Main.css";
import Sections from "../Sections";

interface State {
  products: Array<ProductEntity>;
  state: string;
}

interface ProductEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

class Main extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { products: [], state: "initial" };
  }

  componentDidMount = () => {
    this.searchProducts({});
  };

  searchProducts = (searchParams: any) => {
    this.setState({ state: "loading" }, () => {
      fetchProducts(searchParams)
        .then(products => this.setState({ products, state: "success" }))
        .catch(err => this.setState({ state: "error" }));
    });
  };

  render() {
    const { products, state } = this.state;

    const skeletons: Array<{}> = [];
    for (let i = 0; i < 20; i++) {
      skeletons.push(<ProductSkeleton key={`${i}`} />);
    }

    return (
      <>
        <SearchBar searchProducts={this.searchProducts} />

        <div className='area'>
          <Sections />
          <div className='product-list'>
            {state === "loading" && skeletons}
            {state === "success" &&
              products.map(product => (
                <Product key={product.id} {...product} />
              ))}
            {state === "error" && <Error />}
          </div>
        </div>
      </>
    );
  }
}

export default Main;
