import { LegendsCardListPageProps } from '../../legends-card-list-page'
import { CardData, CardList } from '../../legends-card-list-page.data'
import { LegendsCardItem } from '../legends-card-item/legends-card-item'
import Css from "./legends-card-list.module.css";


export interface LegendsCardListProps {
  cardList: CardList;
}

export const LegendsCardList: React.FC<LegendsCardListPageProps> = ({cardList}) => {
  return  (
    <div className={Css.cardList}>
        {cardList?.cards?.map((cardData: CardData) => {
          return (
            <LegendsCardItem cardData={cardData}/>
          )
        })}
    </div>
  )
}