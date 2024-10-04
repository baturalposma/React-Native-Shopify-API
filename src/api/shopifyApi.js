import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: 'http://<store-url>.myshopify.com',
  apiVersion: '2024-07',
  publicAccessToken: '<access-token>'
});

export const fetchCollectionByHandle = async (handle) => {
  const query = `
    query {
      collectionByHandle(handle: "${handle}") {
        id
        title
        products(first: 5) {
          edges {
            node {
              id
              title
              description
              images(first: 1) {
                edges {
                  node {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {

    const response = await client.request(query);

    const products = response.data.collectionByHandle.products.edges;

    if (!products || products.length === 0) {
      throw new Error('No products found in this collection.');
    }

    return products;
  } catch (error) {
    console.error('Error fetching products by collection handle:', error);
    return [];
  }
};
