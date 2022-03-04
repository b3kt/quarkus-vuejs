export function getQuotes (state) {
    return state.feeds !== undefined && state.feeds !== null ? state.feeds.quotes : [];
}
export function getSearchQuery (state) {
    return state.searchQuery;
}
