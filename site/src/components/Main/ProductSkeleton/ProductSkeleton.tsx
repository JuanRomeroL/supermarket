import React from "react";
import Skeleton from "react-loading-skeleton";

interface ProductSkeletonProps {
  className?: string;
}

class ProductSkeleton extends React.Component<ProductSkeletonProps> {
  render() {
    return (
      <div className={this.props.className}>
        <Skeleton height={184} />

        <div className='product-general'>
          <Skeleton height={20} />
          <Skeleton height={18} />
        </div>

        <div className='product-price'>
          <Skeleton height={20} />
          <Skeleton height={14} />
        </div>

        <div className='product-tools'>
          <Skeleton width={160} height={40} />
        </div>
      </div>
    );
  }
}

export default ProductSkeleton;
