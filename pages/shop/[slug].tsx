import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { Items, ItemData } from "../../utils/apiResponseTypes"

type ProductProps = {
  item: ItemData
}
interface Params extends ParsedUrlQuery {
  slug: string
}

export default function Shop({ item }: ProductProps) {
  console.log("--------", item)
  return <div>shop</div>
}
export async function getStaticPaths() {
  const categorie = "t-shirts"
  const limit = 10
  const page = 1

  const fetchAllProducts = await fetch(
    `https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/taxon-products/by-slug/categorie-${categorie}?limit=${limit}&page=${page}`
  )
  const allProducts = await fetchAllProducts.json()

  const paths = allProducts.items.map((product: Items) => {
    return {
      params: { slug: product.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<ProductProps, Params> = async (
  context
) => {
  const slug = context.params?.slug

  const apiUrl =
    "https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/products/by-slug/"

  const fetchOneProductBySlug = await fetch(`${apiUrl}${slug}`)
  const productData = await fetchOneProductBySlug.json()

  return {
    props: { item: productData.name },
    revalidate: 30 * 60,
  }
}
