export interface Items {
  items: Item[]
}

export interface Item {
  name: string
  shortDescription: string
  slug: string
  images: ItemImage[]
}

export interface ItemImage {
  cachedPath: string
}
