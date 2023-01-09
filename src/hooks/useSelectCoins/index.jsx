import { useState } from "react";
import { Label, Select } from "./style";

const useSelectCoins = (title, options) => {
  const [state, setState] = useState("");

  const SelectCoins = () => (
    <>
      <Label>{title}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Seleccione</option>

        {options.map((element) => (
          <option key={element.id} value={element.id}>
            {element.name}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectCoins];
};

export default useSelectCoins;
