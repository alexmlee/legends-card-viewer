import { LegendsCardListPageProps } from '../../legends-card-list-page'
import { CardData, CardList } from '../../legends-card-list-page.data'
import { LegendsCardItem } from '../legends-card-item/legends-card-item'

export interface LegendsCardListContentProps {
  cardList: CardList;
}

export const LegendsCardListContent: React.FC<LegendsCardListPageProps> = ({cardList}) => {
  return  (
    <div>
        {cardList?.cards?.map((cardData: CardData) => {
          return (
            <LegendsCardItem cardData={cardData}/>
          )
        })}
    </div>
  )
}