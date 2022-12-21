import { Items } from "../utils/apiResponseTypes"
import Hero from "../components/shared/hero/Hero"
import PreviewAllProducts from "../components/shared/previewAllProducts/PreviewAllProducts"

export default function Home({ items }: Items) {

  return (
    <div>
      <Hero />
      <PreviewAllProducts items={items} />
    </div>
  )
}

export async function getStaticProps() {
  const categorie = "t-shirts"
  const limit = 10
  const page = 1

  const fetchAllProducts = await fetch(
    `https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/taxon-products/by-slug/categorie-${categorie}?limit=${limit}&page=${page}`
  )
  const allProducts = await fetchAllProducts.json()

  return {
    props: { items: allProducts.items },
    revalidate: 7200,
  }
}
