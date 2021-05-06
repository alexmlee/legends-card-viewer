import { FC } from "react";

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