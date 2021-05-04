import { useContext } from 'react';
import { ThemeContext, THEMES } from '../../../../common/contexts/theme-context/theme-context';
import { CardData, CardList } from '../../legends-card-list-page.data'
import { LegendsCardItem } from '../legends-card-item/legends-card-item'
import { LegendsCardList } from '../legends-card-list/legends-card-list';
import Css from "./legends-card-list-content.module.css";


export interface LegendsCardListContentProps {
  cardList: CardList;
  isLoaded: boolean;
}

export const LegendsCardListContent: React.FC<LegendsCardListContentProps> = ({cardList, isLoaded}) => {
  const { theme } = useContext(ThemeContext);

  
  return  (
    <>
    { !isLoaded && 
      <div className={Css.preloader}>
        <img src={THEMES[theme].loader} alt="spinner"/> 
      </div>
    }
    { isLoaded && 
      <div className={Css.listContainer}>
        <LegendsCardList cardList={cardList} />
      </div>
    }
    </>
  )
}