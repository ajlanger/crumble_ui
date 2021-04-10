/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserinfo = /* GraphQL */ `
  query GetUserinfo($id: ID!) {
    getUserinfo(id: $id) {
      id
      krakenusername
      krakenapikey
      cryptocoins
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUserinfos = /* GraphQL */ `
  query ListUserinfos(
    $filter: ModelUserinfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserinfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        krakenusername
        krakenapikey
        cryptocoins
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
