import config from "../config.js";

export default class QuoteModel {
  constructor(utils, fetchHandler) {
    this.utils = utils;
    this.fetchHandler = fetchHandler;
    this.baseEndpointUrl = 'assets/data/quotes.json';
  }

  setQuotesToCache(quotes) {
    localStorage.setItem('quotes', JSON.stringify(quotes));
  }

  getQuotesFromCache() {
    return JSON.parse(localStorage.getItem('quotes')) || null;
  }

  getRandomQuoteFromCache() {
    const quotes = this.getQuotesFromCache();
    if (!quotes) return null;
    const index = this.utils.getNonRepeatingRandomIndex(quotes, 'quotes');
    return quotes[index];
  }

  async handleGetAllQuotes() {
    return await this.fetchHandler.handleFetchRequest(
      this.baseEndpointUrl,
      { method: 'GET'},
      `We couldn't get the quotes data. Please try again later.`,
      true
    );
  }
}