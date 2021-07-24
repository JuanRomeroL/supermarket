import React, { Component } from "react";
//import ReactPaginate from "react-paginate";
import "./Pagination.css";

class Pagination extends Component {
  render() {
    return (
      <div className='pagination'>
        {/* <ReactPaginate
          pageCount={150}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
        /> */}
      </div>
    );
  }
}

export default Pagination;
