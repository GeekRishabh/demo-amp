import "./Product.css";

const Product = ({ image, description, price, name, id }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description}</p>

        <p className="info__price">${price}</p>
      </div>
    </div>
  );
};

export default Product;