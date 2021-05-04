import { CardData } from "../../legends-card-list-page.data";
import { FC } from "react"
import Css from "./legends-card-item.module.css";

export interface LegendsCardItemProps {
  cardData: CardData;
}

export const LegendsCardItem: FC<LegendsCardItemProps> = ({cardData}) => {
  return (
    <div className={Css.legendsCard}>
      {/* Image, Name, Text, Set Name, and Type */}
      <div className={Css.imageContainer}>
        <img className={Css.image} src={cardData.imageUrl} alt={cardData.name + " card art"} />
      </div>
      <div className={Css.textContainer}>
        <div className={Css.name}>{cardData.name}</div>
        <div className={Css.text}>{cardData.text}</div>
        <div className={Css.setName}>{cardData.set.name}</div>
        <div className={Css.type}>{cardData.type}</div>
      </div>


    </div>
  )

}