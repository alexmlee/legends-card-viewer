import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const [fetching, setFetching] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1)

  const observed = useRef(null);

  useEffect(() => {
    console.log("FLAG Z:    " + observed.current);
  }, [observed]);

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

      // Create ref to attach to the loader component
      const loader = useRef(null);

      const loadMore = useCallback((entries) => {
  
          const target = entries[0];
          if (target.isIntersecting) {
              isLoaded && setPage(page+1)
          }
      }, [isLoaded]);
  
  

  useEffect(() => {
    const options = {
        root: null, // window by default
        rootMargin: '0px',
        threshold: 0.25
    };

    // Create observer
    const observer = new IntersectionObserver(loadMore, options);

    // observer the loader
    if (loader && loader.current) {
      
        observer.observe(loader.current!);
    }

    // clean up on willUnMount
    return () => observer.unobserve(loader.current!);
}, [loader, loadMore]);


  return (
      <BaseLayout
        // pageInfo={}
        // socialMetaData={}
        >
        { error && <div> Error</div>}
        <LegendsCardListContent 
          cardList={cardList} 
          isLoaded={isLoaded} 
          fetchMoreCards={() => setPage(page+1)} 
          searchAction={handleSearch}/>
        <div ref={loader}>
          Load More 
        </div>
      </BaseLayout>
  )
}


