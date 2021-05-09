import React from "react";
import { fetchProducts } from "../../api/product";
// import Pagination from "../Pagination";
import Product from "./Product";
// import SearchBar from "../SearchBar";
import "./Main.css";

interface ProductEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface MainProps {
  className?: string;
}

interface MainState {
  products: Array<ProductEntity>;
}

class Main extends React.Component<MainProps, MainState> {
  constructor(props: any) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount = () => {
    fetchProducts()
      .then(products => this.setState({ products }))
      .catch(err => {});
  };

  searchSong = () => {};

  render() {
    const resultsList = this.state.products.map(product => (
      <Product key={product.id} {...product} />
    ));

    return (
      <div className={this.props.className}>
        {/* <SearchBar searchSong={this.searchSong} /> */}
        <div className='results-list'>{resultsList}</div>
        {/* <Pagination /> */}
      </div>
    );
  }
}

export default Main;
