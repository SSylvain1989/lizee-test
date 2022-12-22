import { Box, Container, Grid, Button } from "@mui/material"
import { GetStaticProps } from "next"
import Image from "next/image"
import { ParsedUrlQuery } from "querystring"
import { useEffect, useState } from "react"
import { Items, ItemData, Variants } from "../../types/apiResponseTypes"
import PreviewAllProducts from "../../components/shared/previewAllProducts/PreviewAllProducts"
import styles from "../../styles/shop.module.scss"
import { useRouter } from "next/router"

interface ShopProps {
  item: ItemData
  items: Items[]
}
interface Params extends ParsedUrlQuery {
  slug: string
}

export default function Shop({ item, items }: ShopProps) {
  const router = useRouter();
const { slug } = router.query

  const sizeListAndPricePerProduct = Object.values(item.variants).map(
    (value) => ({
      name: value.name,
      price: value.price,
    })
  )
  useEffect(() => {
    setCurrentPrice(sizeListAndPricePerProduct[0].price)
    setSelectedButton(sizeListAndPricePerProduct[0].name)
  }, [slug])

  const [currentPrice, setCurrentPrice] = useState(
    sizeListAndPricePerProduct[0].price
  )

  const [selectedButton, setSelectedButton] = useState(
    sizeListAndPricePerProduct[0].name
  )

  const handleOnClick = (item: Variants) => {
    setCurrentPrice(item.price)
    setSelectedButton(item.name)
  }

  return (
    <Container maxWidth="xl" sx={{ marginTop: "120px" }}>
      <Container maxWidth="xl" sx={{ marginTop: "120px" }}>
        <Grid container spacing={{ xs: 1, md: 5 }}>
          <Grid item xs={12} md={6}>
            <Box flex="1 1 40%" mb="40px">
              <Image
                src={item.images[0].cachedPath}
                alt=""
                width="80%"
                height="100%"
                layout="responsive"
                style={{ objectFit: "contain", borderRadius: "11px" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box flex="1 1 50%" mb="40px">
              <Box>
                <h1 className={styles.title}>{item.name}</h1>
                <p className={styles.description}>{item.description}</p>
              </Box>

              <Box display="flex" flexDirection="column" minHeight="50px">
                <Box>
                  {sizeListAndPricePerProduct.map((item, index) => (
                    <Button
                      key={index}
                      variant={
                        item.name === selectedButton ? "contained" : "outlined"
                      }
                      sx={{
                        padding: "5px",
                        maxWidth: "35px",
                        minWidth: "35px",
                        margin: "5px 5px 5px 0",
                        fontSize: "13px",
                      }}
                      onClick={() => handleOnClick(item)}
                    >
                      {item.name}
                    </Button>
                  ))}
                  {currentPrice && (
                    <p>
                      Price : {currentPrice.current.toLocaleString("fr-FR")}{" "}
                      {currentPrice.currency === "EUR" ? "€" : "$"}
                    </p>
                  )}
                  <Button variant="contained">ADD TO CART</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <PreviewAllProducts items={items} />
      </Container>
    </Container>
  )
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

export const getStaticProps: GetStaticProps<ShopProps, Params> = async (
  context
) => {
  const slug = context.params?.slug

  const apiUrl =
    "https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/products/by-slug/"

  const fetchOneProductBySlug = await fetch(`${apiUrl}${slug}`)
  const productData = await fetchOneProductBySlug.json()
  const categorie = "t-shirts"
  const limit = 10
  const page = 1
  const fetchAllProducts = await fetch(
    `https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/taxon-products/by-slug/categorie-${categorie}?limit=${limit}&page=${page}`
  )
  const allProducts = await fetchAllProducts.json()


  return {
    props: { item: productData, items: allProducts.items },
    revalidate: 30 * 60,
  }
}
