import './style.css';

export const Product = ({
  image,
  name,
  price,
  onAddToCart,
  onAmountClick,
  value,
}) => {
  return (
    <div
      className="product"
      onClick={() => {
        onAmountClick(value), onAddToCart(price);
      }}
    >
      <img src={image} className="product__image" />
      <div className="product__body">
        {name}: {price} Kč <br />
        {value} ks
      </div>
    </div>
  );
};
