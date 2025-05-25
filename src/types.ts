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

export interface IDataProducts {
  products: {
    edges: IProduct[];
  };
};

export interface ICartItem {
  id: string;
  quantity: number;
}

export interface IImage {
  id: string;
  url: string;
}

export interface ICollection {
  node: {
    id: string;
    handle: string;
    title: string;
    description: string;
    image: IImage;
  };
}

export interface IDataCollections {
  collections: {
    edges: ICollection[];
  };
};

export interface IContextType {
  products?: IProduct[];
  cartItems: ICartItem[];
  addProductToCart: (id: string, quantity: number) => () => void;
  removeProductFromCart: (id: string) => () => void;
  incQuantity: (id: string) => () => void;
  decQuantity: (id: string, quantity: number) => (() => void) | undefined;
};
