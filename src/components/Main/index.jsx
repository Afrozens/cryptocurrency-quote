import Formulary from "../Formulary";
import ImgCrypto from "/src/assets/imagen-criptos.png";
import { Content, Heading, ImageCryptos } from "./style";

const Main = ({ setCoins }) => {
  return (
    <Content>
      <ImageCryptos src={ImgCrypto} alt="Diferentes Criptomonedas"></ImageCryptos>
      <div>
        <Heading>Cotizador de Criptomonedas al instante</Heading>
        <Formulary setCoins={setCoins} />
      </div>
    </Content>
  );
};

export default Main;
