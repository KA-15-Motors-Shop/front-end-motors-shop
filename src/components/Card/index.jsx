import {
  CardStyle,
  Image,
  TitleCardStyle,
  DescriptionCardStyle,
  SellerCardStyle,
  InfoCardStyle,
} from "./styles"

function Card({ img_w = 262, img_h = 150 }) {
  return (
    <CardStyle>
      <Image width={img_w} height={img_h}></Image>
      <TitleCardStyle></TitleCardStyle>
      <DescriptionCardStyle></DescriptionCardStyle>
      <SellerCardStyle></SellerCardStyle>
      <InfoCardStyle></InfoCardStyle>
    </CardStyle>
  )
}
