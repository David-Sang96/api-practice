/* eslint-disable react/prop-types */
const Card = ({ product }) => {
  const { title, image, price, description, category } = product;
  return (
    <div className="border rounded-lg shadow-lg p-3 space-y-2">
      <img
        src={image}
        alt={title}
        className=" w-[200px] p-4 md:w-[300px] md:p-10 "
      />
      <h3 className="text-xl text-slate-95000 ">{title}</h3>
      <p>${price}</p>
      <p>{description}</p>
      <p className="text-slate-800">
        <span className="font-bold">Category :</span> {category}
      </p>
    </div>
  );
};

export default Card;
