import { useState } from "react";
import { Input } from "../Input";
import { Select } from "../Select";
import { TotalValue } from "../../TotalValue";
import styles from "./style.module.scss";

export const RegisterForm = ({ addFinance }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const [category, setCategory] = useState("entradas");
  const submit = (event) => {
    event.preventDefault();

    if (description !== "" && value !== "") {
      addFinance(description, value, category);

      setDescription("");
      setValue("");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.registerBox} onSubmit={submit}>
        <Input
          label="Descrição"
          placeholder="Digite aqui sua descrição"
          type="text"
          id="description"
          value={description}
          setValue={setDescription}
        />
        <p className="paragraph color">Ex: Compra de roupas</p>
        <Input
          label="Valor (R$)"
          placeholder="1"
          type="number"
          id="value"
          value={value}
          setValue={setValue}
        />

        <label className="paragraph color" htmlFor="">
          Tipo de valor
        </label>
        <Select
          className="paragraph color"
          id="category"
          setValue={setCategory}
          value={category}
        >
          <option value="entradas">entradas</option>
          <option value="despesas">despesas</option>
        </Select>
        <button className="btn large" type="submit">
          Inserir o valor
        </button>
      </form>
    </div>
  );
};
