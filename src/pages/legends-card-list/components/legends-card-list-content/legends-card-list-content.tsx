import { useContext, useState } from 'react';
import { ThemeContext, THEMES } from '../../../../common/contexts/theme-context/theme-context';
import { CardList } from '../../legends-card-list-page.data'
import { LegendsCardList } from '../legends-card-list/legends-card-list';
import Css from "./legends-card-list-content.module.css";

export interface LegendsCardListContentProps {
  cardList: CardList;
  isLoaded: boolean;
  fetchMoreCards: () => void;
  searchAction: (searchText: string) => void;
  moreResults: boolean;
}

export const LegendsCardListContent: React.FC<LegendsCardListContentProps> = ({
  cardList, 
  isLoaded, 
  fetchMoreCards, 
  searchAction,
  moreResults
}) => {
  const { theme } = useContext(ThemeContext);
  const [localText, setLocalText] = useState<string>("");
  const handleChange = (event: any) => {
    setLocalText(event.target.value);
  }


  return  (
    <>
      <div className="searchBar">
        {/* <input type="submit" id="mySubmit" /> */}
        {/* <button onClick={() => searchAction(localText)}>SEARCH</button> */}
        <form action='#' onSubmit={() => {searchAction(localText)}}>
          <input type="text" name="search" value={localText} onChange={handleChange} />
          <button type="submit">SEARCH</button>
        </form>
      </div>
      <div className={Css.listContainer}>
        <LegendsCardList cardList={cardList} />
        { !isLoaded && 
      <div className={Css.preloader}>
        <img src={THEMES[theme].loader} alt="spinner"/> 
      </div>
    }
    { !moreResults && isLoaded && 
      <div className={Css.noMoreResults}>
        Every ending is simply a new beginning. Except in this case, it's really the end. There are no more results.
      </div>
    }
      </div>
      {/* <div className={Css.showMoreContainer}>
        <button onClick={() => fetchMoreCards()} >SHOW MORE</button>
      </div> */}

    </>
  )
}