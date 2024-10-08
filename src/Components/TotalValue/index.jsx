import styles from "./style.module.scss";
export const TotalValue = ({ listFinances }) => {
  const totalSum = listFinances.reduce((acc, finance) => {
    if (finance.category === "entradas") {
      return acc + Number(finance.value);
    } else {
      return acc - Number(finance.value);
    }
  }, 0);

  return (
    <div className={styles.totalCard}>
      <div className={styles.box}>
        <h3 className="title three">Valor total </h3>
        <span className="paragraph bold">R$ {totalSum}</span>
        <p className="paragraph color">O valor se refere ao saldo</p>
      </div>
    </div>
  );
};
