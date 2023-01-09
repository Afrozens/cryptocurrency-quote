import {ContentResult, ImageCrypto, Text, Price} from './style'

const Result = ({result}) => {
    const {PRICE, HIGHDAY, LOWDAY, IMAGEURL, LASTUPDATE} = result
  return (
    <ContentResult>
      <ImageCrypto src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen criptomoneda" />
        <div>
        <Price>El precio es de: <span>{PRICE}</span></Price>
        <Text>El precio es de: <span>{HIGHDAY}</span></Text>
        <Text>El precio es de: <span>{LOWDAY}</span></Text>
        <Text>El precio es de: <span>{LASTUPDATE}</span></Text>
        </div>
    </ContentResult>
  )
}

export default Result