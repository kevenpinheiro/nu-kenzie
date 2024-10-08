import { TotalValue } from "../../TotalValue";
import { FinanceCard } from "./FinanceCard";
import styles from "./style.module.scss";

export const FinanceList = ({ listFinances, removeCard }) => {
  return (
    <div className={styles.container}>
      <h3 className="title three">Resumo financeiro</h3>

      {listFinances.length > 0 ? (
        <ul className={styles.listBox}>
          {listFinances.map((finance) => {
            const { description, value, id, category } = finance;

            return (
              <FinanceCard
                key={id}
                id={id}
                description={description}
                value={value}
                category={category}
                removeCard={removeCard}
              />
            );
          })}
        </ul>
      ) : (
        <p className="paragraph bold">
          Você ainda não possui nenhum lançamento.
        </p>
      )}
    </div>
  );
};
