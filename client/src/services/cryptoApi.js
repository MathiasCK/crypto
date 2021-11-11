import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '103c4f49b6msh4e19359526c2f79p1ceb74jsn59cc64fc64a8',
};

const baseUrl = 'https://api.coinranking.com/v1/public';

const createRequest = url => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getCryptos: builder.query({
      query: count =>
        createRequest(
          `/coins?limit=${count}?x-access-token=i-have-to-migrate-to-v2`,
        ),
    }),
    getCryptoDetails: builder.query({
      query: coinId =>
        createRequest(`/coin/${coinId}?x-access-token=i-have-to-migrate-to-v2`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(
          `/coin/${coinId}/history/${timePeriod}?x-access-token=i-have-to-migrate-to-v2`,
        ),
    }),
    getExchanges: builder.query({
      query: () =>
        createRequest('/exchanges?x-access-token=i-have-to-migrate-to-v2'),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
