import React, { useEffect, useState } from 'react';
import { BaseLayout } from '../../common/components/base-layout/base-layout';
import { LegendsCardListContent } from './components/legends-card-list-content/legends-card-list-content';
import { CardList } from './legends-card-list-page.data';

export interface LegendsCardListPageProps {
  cardList: CardList;
}





// interface LegendsCardListPageProps extends React.FC<LegendsCardListPageProps> {
//   getInitialProps: () => Promise<LegendsCardListPageProps> | void;
// }

export const LegendsCardListPage: React.FC = props => {
  const initialList: CardList = {
    cards: [],
    _pageSize: 0,
    _totalCount: 0
  }
  const [cardList, setCardList] = useState<CardList>(initialList);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState(null);
  
  console.log('Flag 1.1')
  useEffect(() => {
    fetch("https://api.elderscrollslegends.io/v1/cards")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(JSON.stringify(result))
          setIsLoaded(true);
          setCardList(result);
        },
      (error: any) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])
  console.log('Flag 1.2')

  return (
      <BaseLayout
        // pageInfo={}
        // socialMetaData={}
        >
        { error && <div> Error</div>}
        <LegendsCardListContent cardList={cardList} />
      </BaseLayout>
  )
}

// LegendsCardListPage.getInitialProps = async {

// }