import Hero from "./components/shared/hero/Hero"

export default function Home({ allProducts } : any) {
  console.log(allProducts)
  return (
    <div>
      <Hero />
    </div>
  )
}

export async function getStaticProps() {
  const fetchAllProducts = await fetch("https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/taxon-products/by-slug/categorie-t-shirts?limit=1&page=1")
  const allProducts = await fetchAllProducts.json()
    console.log(allProducts)
  return {
    props: { allProducts },
    revalidate: 7200,
  }
}
