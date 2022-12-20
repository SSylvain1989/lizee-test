import { Grid, Stack, Container } from "@mui/material"
import { Items } from "../../../utils/apiResponseTypes"
import PreviewOneProduct from "../previewOneProduct/PreviewOneProduct"

interface PreviewAllProductsProps {
  items: Items[]
}

export default function PreviewAllProducts({ items }: PreviewAllProductsProps) {
  return (
    <Container maxWidth="xl">
      <Stack alignItems="center" sx={{ m: "120px 0" }}>
        <Grid
          container
          justifyContent="center"
          spacing={{ xs: 1, sm: 1, md: 2, lg: 6 }}
        >
          {items.map((product) => (
            <Grid item key={product.slug}>
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
