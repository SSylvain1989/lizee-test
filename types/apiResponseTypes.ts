export interface Items {
  items: Items[]
}

export interface Items {
  name: string
  shortDescription: string
  slug: string
  images: ItemImage[]
}

export interface ItemImage {
  cachedPath: string
}

export interface ItemData {
  name: string;
  description: string;
  images: ItemImage[];
  variants: Record<string,Variants>
};

export interface Variants {
  name: string;
  price?: {
    current: number;
    currency: string;
  };
  purchasePrice?: number;
};