import { apolloClientInstance } from "boot/apollo";
import { secureStorage, getContextHeaders } from "boot/app";
import { fetchQuotesQuery } from "../../apollo/query/quotes";

export function fetchQuotes(context) {
  const quotes = secureStorage.getItem("quotes");
  if (quotes === null || quotes === undefined) {
    const contextHeaders = getContextHeaders();
    return apolloClientInstance
      .query(fetchQuotesQuery(contextHeaders))
      .then((response) => {
        if (
          response.data.quotes !== undefined &&
          response.data.quotes !== null
        ) {
          const val = {
            name: "quotes",
            value: response.data.quotes,
          };
          secureStorage.setItem("quotes", val);
          context.commit("setFeedsObject", val);
        }
      });
  } else {
    context.commit("setFeedsObject", quotes);
  }
}
