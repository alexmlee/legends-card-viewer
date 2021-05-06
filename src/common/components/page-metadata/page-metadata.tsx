import { PageInfo, SocialMetaData } from "../base-layout/base-layout"

export interface PageMetaDataProps {
  pageInfo: PageInfo;
  socialMetaData: SocialMetaData;
}

export const PageMetaData: React.FC<PageMetaDataProps> = ({pageInfo, socialMetaData}) => {
  return (
    <head>
      <title> {pageInfo.title}</title>
      <meta name="description" content={pageInfo.description}/>
      <meta property="og:title" content={pageInfo.title}/>
      <meta property="og:description" content={pageInfo.description}/>
      <meta property="og:image" content={socialMetaData.imageUrl}/>
      <meta property="og:site_name" content={pageInfo.title}/>
      <meta name="twitter:card" content={socialMetaData.twitterCard}/>
      <meta name="twitter:site" content={pageInfo.canonicalUrl}/>
      <meta property="twitter:title" content={pageInfo.title}/>
      <meta property="twitter:description" content={pageInfo.description}/>
      <meta property="twitter:image   " content={socialMetaData.imageUrl}/>
      <meta property="twitter:image" content={socialMetaData.imageUrl}/>
      {/* <meta name="twitter:domain" content={pageInfo.canonicalUrl}/> */}
      <meta name="twitter:url" content={pageInfo.canonicalUrl}/>
  </head>
  )
}