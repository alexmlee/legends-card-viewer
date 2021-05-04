import { CardData } from "../../legends-card-list-page.data";
import { FC } from "react"

export interface LegendsCardItemProps {
  cardData: CardData;
}

export const LegendsCardItem: FC<LegendsCardItemProps> = ({cardData}) => {
  return (
    <div>
      {/* Image, Name, Text, Set Name, and Type */}
      <div className={"imageContainer"}>
        <img className={"image"}src={cardData.imageUrl} alt={cardData.name + " card art"} />
      </div>
      <div className={"textContainer"}>
        <div className={"name"}></div>
      </div>


    </div>
  )

}