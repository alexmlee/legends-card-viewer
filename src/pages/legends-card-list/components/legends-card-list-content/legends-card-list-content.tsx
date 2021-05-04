import { LegendsCardListPageProps } from '../../legends-card-list-page'
import { CardData, CardList } from '../../legends-card-list-page.data'

export interface LegendsCardListContentProps {
  cardList: CardList;
}

export const LegendsCardListContent: React.FC<LegendsCardListPageProps> = ({cardList}) => {
  return  (
    <div>
        {cardList?.cards?.map((cardData) => {
          return (<div>{cardData.name} </div>)
        })}
    </div>
  )
}