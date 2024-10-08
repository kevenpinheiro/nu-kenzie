import { useState } from "react";
import { RegisterForm } from "../../Components/Form/RegisterForm";
import { Header } from "../../Components/Header";
import { TotalValue } from "../../Components/TotalValue";
import { FinanceList } from "../../Components/Form/FinanceList";
import styles from "./style.module.scss";

export const HomePage = () => {
  const [listFinances, setListFinances] = useState([]);

  const addFinance = (description, value, category) => {
    const id = crypto.randomUUID();
    const newFinance = { description, value, category, id };

    setListFinances([...listFinances, newFinance]);
  };

  const removeCard = (id) => {
    const listFilter = listFinances.filter((finance) => {
      if (finance.id !== id) {
        return finance;
      }
    });

    setListFinances(listFilter);
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div>
          <RegisterForm addFinance={addFinance} />

          {listFinances.length > 0 ? (
            <TotalValue listFinances={listFinances} />
          ) : null}
        </div>
        <FinanceList listFinances={listFinances} removeCard={removeCard} />
      </main>
    </>
  );
};
