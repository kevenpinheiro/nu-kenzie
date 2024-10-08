import styles from "./style.module.scss";
export const FinanceCard = ({
  description,
  value,
  id,
  category,
  removeCard,
}) => {
  const valorFormatado = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div>
      <li
        className={`
        ${styles.card}
        ${category === "entradas" ? styles.border1 : styles.border2}
      `}
      >
        <div className="box">
          <h2 className="title two">{description}</h2>
          <p className="paragraph color"> {category}</p>
        </div>
        <div className="box">
          <p className="paragraph bold"> R${valorFormatado} </p>
          <button className="btn small2" onClick={() => removeCard(id)}>
            Excluir
          </button>
        </div>
      </li>
    </div>
  );
};
