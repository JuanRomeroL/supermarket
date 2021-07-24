import React from "react";

interface Props {
  searchProducts: Function;
  className?: string;
}

interface State {
  searchParams: any;
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { searchParams: {} };
  }

  handleChange = (e: any) => {
    const { name, value } = e.target;

    const searchParams = {
      ...this.state.searchParams,
      [name]: value.length ? value : undefined,
    };

    this.setState({ searchParams }, () => {
      this.props.searchProducts(this.state.searchParams);
    });
  };

  render() {
    return (
      <div className={this.props.className}>
        <input
          name='name'
          onChange={this.handleChange}
          placeholder='Buscar en supermercado ...'
        />
      </div>
    );
  }
}

export default SearchBar;
