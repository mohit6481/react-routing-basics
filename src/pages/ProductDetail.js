import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h2>Product details!</h2>
      <p>{params.productId}</p>
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  );
};

export default ProductDetail;
