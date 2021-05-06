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

  useEffect( () => {
    async function fetchCards() {
      console.log("fetch cards is being called");
      console.log("INITIAL LOAD: " + initialLoad)
      console.log("page: " + page)

      console.log("total count: " + cardList._totalCount)
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

  // TODO: move search functionality into primary fetchCards functionality
  const handleSearch = (inComingSearchText: string): void => {
    setIsLoaded(false);
    console.log('handling search +' + inComingSearchText)
    setSearchText(inComingSearchText);
    // setPage(1);
    // setCardList(initialList)
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

  // Create ref to attach to the loader component
  const loader = useRef(null);

  const loadMore = useCallback((entries) => {
      console.log("in the callback")
      const target = entries[0];
      if (target.isIntersecting) {
        console.log('comparing page + 1 * 20: ' + (page)*20 +" wow and cardList._totalCount:    " + cardList._totalCount)
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


