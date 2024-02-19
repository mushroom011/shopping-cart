export const COLLECTIONS_URL =
  "https://mock.shop/api?query={collections(first:%2010){edges%20{cursor%20node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}";

export const PRODUCTS_URL =
  "https://mock.shop/api?query={products(first:%2010){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}";
