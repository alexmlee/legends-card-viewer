import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BaseLayout } from '../../common/components/base-layout/base-layout';
import { CARDS_PER_LOAD, ElderScrollsLegends } from './adapters/elder-scrolls-legends-adapter/elder-scrolls-legends-adapter';
import { LegendsCardListContent } from './components/legends-card-list-content/legends-card-list-content';
import { CardList, LegendsCardListPageInfo, LegendsCardListPageSocial } from './legends-card-list-page.data';

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
  const [searchText, setSearchText] = useState<string>("")
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  useEffect( () => {
    setInitialLoad(false);
  }, []);

  // Fetch functionality
  useEffect( () => {
    async function fetchCards() {
      if (initialLoad  || (!initialLoad && (page - 1 * CARDS_PER_LOAD < cardList._totalCount)) ) {
        const response = await ElderScrollsLegends.getCards(page, searchText)
        // TODO: replace this with a useReduce/useCallback usage
        if (page !== 1 ) {
          let newCardObject: any = {};
          newCardObject["cards"] = cardList.cards.concat(response.cards);
          setCardList({
            ...cardList,
            ...newCardObject
          })
        } else {
          console.log(JSON.stringify(response._totalCount))
          console.log(page)
          setCardList(response);
        }

      } 
      setIsLoaded(true);
    }
    setIsLoaded(false);
    fetchCards();
  }, [page])

  // Search Functionality
  const handleSearch = (inComingSearchText: string): void => {
    setIsLoaded(false);
    console.log('handling search +' + inComingSearchText)
    setSearchText(inComingSearchText);
    searchCards(inComingSearchText);
  }

  const searchCards = async (inComingSearchText: string) => {
    console.log("in searchCards about to search on")
    console.log(inComingSearchText)
    const response = await ElderScrollsLegends.getCards(1, inComingSearchText);
    setCardList(response);
    setIsLoaded(true);
    setPage(1)
    console.log(page);
  }

  // Infinite Scroll functionality
  const loader = useRef(null);
  const loadMore = useCallback((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
          isLoaded && (page * CARDS_PER_LOAD < cardList._totalCount) && setPage(page+1)
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
        pageInfo={LegendsCardListPageInfo}
        socialMetaData={LegendsCardListPageSocial}
        >
        { error && <div> Error</div>}
        <LegendsCardListContent 
          cardList={cardList} 
          isLoaded={isLoaded} 
          fetchMoreCards={() => setPage(page+1)} 
          searchAction={handleSearch}
          moreResults={ !(page * CARDS_PER_LOAD > cardList._totalCount)}/>
        <div ref={loader}>
        </div>
      </BaseLayout>
  )
}
