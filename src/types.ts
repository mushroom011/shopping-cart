export interface IProduct {
  node: {
    id: string;
    title: string;
    description: string;
    featuredImage: {
      id: string;
      url: string;
    };
    variants: {
      edges: [
        {
          node: {
            price: {
              amount: string;
              currencyCode: string;
            };
          };
        }
      ];
    };
  };
}

export type DataProducts = {
  products: {
    edges: IProduct[];
  };
};

export interface ICartItem {
  id: string;
  quantity: number;
}

export interface ICollection {
  node: {
    id: string;
    handle: string;
    title: string;
    description: string;
    image: { id: string; url: string };
  };
}

export type DataCollections = {
  collections: {
    edges: ICollection[];
  };
};

export type ContextType = {
  products: IProduct[] | undefined;
  cartItems: ICartItem[];
  addProductToCart: (id: string, quantity: number) => () => void;
  removeProductFromCart: (id: string) => () => void;
  incQuantity: (id: string) => () => void;
  decQuantity: (id: string, quantity: number) => (() => void) | undefined;
};
