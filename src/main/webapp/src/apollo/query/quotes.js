import gql from "graphql-tag";

export function fetchQuotesQuery(contextHeaders) {
  return {
    query: gql`
      query fetchQuotes {
        quotes {
          name
          quotes
          source
          font_size
          image {
            url
            thumbnail_url
          }
        }
      }
    `,
    context: contextHeaders,
  };
}
