export function setFeedsObject (state, params) {
  state.feeds[params.name] = params.value;
}

export function setSearchQuery (state, value) {
  state.searchQuery = value;
}
