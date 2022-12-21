import {
  Box,
  Container,
  Grid,
  Button,
} from "@mui/material"
import { GetStaticProps } from "next"
import Image from "next/image"
import { ParsedUrlQuery } from "querystring"
import { useState } from "react"
import { Items, ItemData } from "../../utils/apiResponseTypes"

type ProductProps = {
  item: ItemData
}
interface Params extends ParsedUrlQuery {
  slug: string
}

export default function Shop({ item }: ProductProps) {

  const sizeListAndPricePerProduct = Object.values(item.variants).map(
    (value) => ({
      name: value.name,
      price: value.price,
    })
  )

  const [currentPrice, setCurrentPrice] = useState(
    sizeListAndPricePerProduct[0].price
  )

  return (
    <Container
      maxWidth="xl"
      sx={{ marginTop: "120px" }}
    >
      <Grid
        container
        sx={{ justifyContent: "center", height: "780px" }}
        spacing={8}
      >
        <Grid item xs={12} lg={6} alignItems="center">
          <Box
            width="100%"
            height="100%"
            position="relative"
            marginTop={5}
            maxWidth="580px"
            maxHeight="771px"
            borderRadius={3}
          >
            <Image
              src={item.images[0].cachedPath}
              alt=""
              layout="fill"
              style={{ objectFit: "contain", borderRadius: "11px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>Select your sizes</p>
            {sizeListAndPricePerProduct.map((item, index) => (
              <Button
                variant="contained"
                key={index}
                onClick={() => setCurrentPrice(item.price)}
              >
                {item.name}
              </Button>
            ))}
            {currentPrice && (
              <p>
                Price : {currentPrice.current}
                {currentPrice.currency}
              </p>
            )}
            <Button variant="contained" color="primary">
              Buy
            </Button>
          </Box>
        </Grid>
      </Grid>
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

export const getStaticProps: GetStaticProps<ProductProps, Params> = async (
  context
) => {
  const slug = context.params?.slug

  const apiUrl =
    "https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/products/by-slug/"

  const fetchOneProductBySlug = await fetch(`${apiUrl}${slug}`)
  const productData = await fetchOneProductBySlug.json()

  return {
    props: { item: productData },
    revalidate: 30 * 60,
  }
}
