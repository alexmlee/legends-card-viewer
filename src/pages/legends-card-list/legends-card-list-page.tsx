import React, { useEffect, useRef, useState } from 'react';
import { BaseLayout } from '../../common/components/base-layout/base-layout';
import { ElderScrollsLegends } from './adapters/elder-scrolls-legends-adapter/elder-scrolls-legends-adapter';
import { LegendsCardListContent } from './components/legends-card-list-content/legends-card-list-content';
import { CardList } from './legends-card-list-page.data';

export interface LegendsCardListPageProps {
  cardList: CardList;
}

export const LegendsCardListPage: React.FC = props => {
  const initialList: CardList = {
    cards: [],
    _pageSize: 0,
    _totalCount: 0
  }
  const [cardList, setCardList] = useState<CardList>(initialList);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState<number>(1)

  const loader = useRef(null);
  
  useEffect( () => {
    async function fetchCards() {
      console.log("fetch cards is being called");
      const response = await ElderScrollsLegends.getCards(page)
      // TODO: replace this with a useReduce/useCallback usage
      let newCardObject: any = {};
      newCardObject["cards"] = cardList.cards.concat(response.cards);
      setCardList({
        ...cardList,
        ...newCardObject
      })
      setIsLoaded(true);
    }
    setIsLoaded(false);
    fetchCards();
  }, [page])

  useEffect( () => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    }
    const observer = new IntersectionObserver(handleObserver, options)
    if (loader && loader.current) {
      /* tslint: disable-next-line */
      observer.observe(loader.current!);
    }
  }, [])


  const handleObserver = (entities: any) => {
    console.log("FLAG 4")
    const target = entities[0];
    if (target.isIntersecting) {
      setPage(page+1)
    }
  }

  // const handleObserver(entities: any, observer: any) {


  // }
  // TODO: move search functionality into primary fetchCards functionality
  const handleSearch = (searchText: string): void => {
    setIsLoaded(false);
    setCardList(initialList)
    searchCards(searchText);
  }

  const searchCards = async (searchText: string) => {
    const response = await ElderScrollsLegends.getCards(1, searchText);
    setCardList(response);
    setIsLoaded(true);
  }


  return (
      <BaseLayout
        // pageInfo={}
        // socialMetaData={}
        >
        { error && <div> Error</div>}
        <LegendsCardListContent cardList={cardList} isLoaded={isLoaded} fetchMoreCards={() => setPage(page+1)} searchAction={handleSearch}/>
        <div ref={loader}>
          Load More
        </div>
      </BaseLayout>
  )
}
