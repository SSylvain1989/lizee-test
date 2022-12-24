import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { GetStaticProps } from "next"
import Image from "next/image"
import { Box, Container, Grid, Button } from "@mui/material"
import { ParsedUrlQuery } from "querystring"
import { Items, ItemData } from "../../types/apiResponseTypes"
import PreviewAllProducts from "../../components/shared/previewAllProducts/PreviewAllProducts"
import { getAllProducts , getProductBySlug } from "../../api/products"
import styles from "../../styles/shop.module.scss"

interface ShopProps {
  item: ItemData
  items: Items[]
}
interface Params extends ParsedUrlQuery {
  slug: string
}

interface newVariants {
  size: string
  price: number
  currency: string
}

export default function Shop({ item, items }: ShopProps) {
  const router = useRouter()
  const { slug } = router.query

  const sizeListAndPricePerProduct = Object.values(item.variants).map(
    (value) => ({
      size: value.name,
      price: value.price?.current || value.purchasePrice || 0,
      currency: value?.price?.currency || "EUR",
    })
  )

  const [selectedVariant, setSelectedVariant] = useState(
    sizeListAndPricePerProduct[0]
  )

  useEffect(() => {
    setSelectedVariant(sizeListAndPricePerProduct[0])
  }, [slug])

  const handleOnClick = (variant: newVariants) => {
    setSelectedVariant(variant)
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
                <p>About this product :</p>
                <p className={styles.description}>{item.description}</p>
              </Box>

              <Box display="flex" flexDirection="column" minHeight="50px">
                <p>Select your size : </p>
                <Box>
                  {sizeListAndPricePerProduct.map((variant, index) => (
                    <Button
                      key={index}
                      variant={
                        variant.size === selectedVariant.size
                          ? "contained"
                          : "outlined"
                      }
                      sx={{
                        padding: "5px",
                        maxWidth: "35px",
                        minWidth: "35px",
                        margin: "5px 5px 5px 0",
                        fontSize: "13px",
                      }}
                      onClick={() => handleOnClick(variant)}
                    >
                      {variant.size}
                    </Button>
                  ))}
                  {selectedVariant.price && (
                    <p>
                      Price : {selectedVariant.price.toLocaleString("fr-FR")}{" "}
                      {selectedVariant.currency === "EUR" ? "€" : "$"}
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

  const allProducts = await getAllProducts(categorie, limit, page);

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

  const productData = await getProductBySlug(slug ? slug : "");
  const categorie = "t-shirts"
  const limit = 10
  const page = 1
  const allProducts = await getAllProducts(categorie, limit, page);

  return {
    props: { item: productData, items: allProducts.items },
    revalidate: 30 * 60,
  }
}