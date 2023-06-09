import ItemListCSS from "./ItemList.css";
import ItemComponent from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <ItemComponent key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ItemList;
