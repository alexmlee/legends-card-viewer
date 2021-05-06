import { PageInfo, SocialMetaData } from "../../common/components/base-layout/base-layout";

export const LegendsCardListPageInfo: PageInfo = {
  title: "Elder Scrolls Legends Card Viewer", 
  description: "Search and explore cards from the card game Elder Scrolls Legends",
  canonicalUrl: "https://legends-card-list.netlify.app/"
}

export const LegendsCardListPageSocial: SocialMetaData = {
  type: "article",
  imageUrl: "bg.jpg",
  twitterCard: "summary_large_image"
}

export interface CardList {
  cards: CardData[];
  _pageSize: number;
  _totalCount: number;
}

export interface CardData {
  name: string;
  rarity: string;
  type: string;
  subtypes?: (string)[] | null;
  cost: number;
  power: number;
  health: number;
  set: Set;
  soulSummon: number;
  soulTrap: number;
  text: string;
  attributes?: (string)[] | null;
  keywords?: (string)[] | null;
  unique: boolean;
  imageUrl: string;
  id: string;
}

export interface Set {
  id: string;
  name: string;
  _self: string;
}