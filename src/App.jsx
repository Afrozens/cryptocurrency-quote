import { useState, useEffect } from "react";
/* import { useFetch } from "./hooks/useFetch"; */
import Main from "./components/Main";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const App = () => {
  const [coins, setCoins] = useState({});
  const [result, setResult] = useState({});
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      setLoading(true);
      setResult({});
      const { coin, coinCrypto } = coins;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinCrypto}&tsyms=${coin}`;
      const signal = async () => {
        const data = await fetch(url);
        const res = await data.json();
        setResult(res.DISPLAY[coinCrypto][coin]);
        setLoading(false);
      };
      signal();
    }
  }, [coins]);

  return (
    <div>
      <Main setCoins={setCoins} />
      {Loading && <Spinner />}
      {result.PRICE && <Result result={result} />}
    </div>
  );
};

export default App;
