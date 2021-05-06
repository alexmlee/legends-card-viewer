import { CardList } from "../../legends-card-list-page.data";
import axios from 'axios'

export const CARDS_PER_LOAD = 20;

export class ElderScrollsLegendsAdapter {
  public async getCards(page: number, searchText: string = ""): Promise<CardList> {
    try {
      // Axios default configuration is to reject anything that's not a 200
      // nicely reducing the amount of code needed versus fetch
      const url = "https://api.elderscrollslegends.io/v1/cards?pageSize="+CARDS_PER_LOAD+"&page=" + page + "&name=" + searchText;
      console.log("URL: " + url)
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      console.error(error);
      return {
        cards: [],
        _pageSize: 0,
        _totalCount: 0
      }
    }
  }
}

export const ElderScrollsLegends = new ElderScrollsLegendsAdapter();