import React from "react";
import { Link } from "react-router-dom";

const ItemComponent = ({ item }) => {
  const { id, name, img, price, stock } = item;

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock Disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`item/${id}`} className="option">
          ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default ItemComponent;
