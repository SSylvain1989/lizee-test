import { Items } from "../types/apiResponseTypes"
import Hero from "../components/shared/hero/Hero"
import PreviewAllProducts from "../components/shared/previewAllProducts/PreviewAllProducts"
import { getAllProducts } from "../api/products"

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
  const allProducts = await getAllProducts(categorie, limit, page);

  return {
    props: { items: allProducts.items },
    revalidate: 7200,
  }
}
