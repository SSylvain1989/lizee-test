import { Items } from "../utils/apiResponseTypes"
import Hero from "./components/shared/hero/Hero"

export default function Home({ items }: Items) {
  console.log(items)
  return (
    <div>
      <Hero />
    </div>
  )
}

export async function getStaticProps() {
  const fetchAllProducts = await fetch(
    "https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/taxon-products/by-slug/categorie-t-shirts?limit=10&page=1"
  )
  const allProducts = await fetchAllProducts.json()
  console.log(allProducts)
  return {
    props: { items: allProducts.items },
    revalidate: 7200,
  }
}
