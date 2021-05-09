import React from "react";

interface ProductProps {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  className?: string;
}

interface ProductState {
  quantity: number;
}

class Product extends React.Component<ProductProps, ProductState> {
  constructor(props: any) {
    super(props);
    this.state = { quantity: 0 };
  }

  addChart = () => {
    this.setState({ quantity: 1 });
  };

  addUnit = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  subsUnit = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };

  render() {
    const { id, image, name, status, species, className } = this.props;
    return (
      <div className={className} key={id}>
        <img src={image} alt='...' />

        <div className='product-general'>
          <p className='name'>{name}</p>
          <p className='size'>{status}</p>
        </div>

        <div className='product-price'>
          <p className='by-unit'>
            <b>{species}</b>
          </p>

          <p className='by-size'>{id}/Gr</p>
        </div>

        <div className='product-tools'>
          {this.state.quantity ? (
            <>
              <button className='edit-quantity-buttons' onClick={this.subsUnit}>
                <b>-</b>
              </button>
              <p className='product-quantity'>{this.state.quantity}</p>
              <button className='edit-quantity-buttons' onClick={this.addUnit}>
                <b>+</b>
              </button>
            </>
          ) : (
            <button className='add-chart-button' onClick={this.addChart}>
              <b>AGREGAR</b>
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Product;
