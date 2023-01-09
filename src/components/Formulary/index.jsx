import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import useSelectCoins from "../../hooks/useSelectCoins";
import { coins } from "../../data/coins";
import { InputSubmit } from "./style";
import Err from "../Err";

const Formulary = ({setCoins}) => {
  const { data, error} = useFetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");

  const [crypto, setCrypto] = useState([]);
  const [err, setErr] = useState(false);
  const [coin, SelectCoins] = useSelectCoins("Elige tu Moneda", coins);
  const [coinCrypto, SelectCoinsCrypto] = useSelectCoins(
    "Elige tu Criptomoneda",
    crypto
  );
  
  if (error) {
    setCrypto([]);
    return;
  }

  useEffect(() => {
    if (data) {
      const arrCrypto = data.Data.map((crypto) => {
        const coinsCrypto = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        return coinsCrypto
      });
      setCrypto(arrCrypto)
    }
  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([coin, coinCrypto].includes("")) {
      setErr(true);
      return;
    }

    setErr(false);
    setCoins({
      coin,
      coinCrypto
    })
  };

  return (
    <>
      {err && <Err>Todos los campos son obligatorios</Err>}
      <form onSubmit={handleSubmit}>
        <SelectCoins />
        <SelectCoinsCrypto />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulary;
