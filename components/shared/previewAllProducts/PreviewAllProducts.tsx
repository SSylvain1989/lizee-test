import { Grid, Stack, Container } from "@mui/material"
import { Items } from "../../../types/apiResponseTypes"
import PreviewOneProduct from "../previewOneProduct/PreviewOneProduct"

interface PreviewAllProductsProps {
  items: Items[]
}

export default function PreviewAllProducts({ items }: PreviewAllProductsProps) {
  return (
    <Container maxWidth="xl">
      <Stack sx={{ m: "120px 0" }}>
        <h2>See all our products :</h2>
        <Grid
          container
          spacing={3}
        >
          {items.map((product) => (
            <Grid xs={6} md={4} lg={3} item key={product.slug}>
              <PreviewOneProduct
                image={product.images[0].cachedPath}
                name={product.name}
                shortDescription={product.shortDescription}
                slug={product.slug}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}
