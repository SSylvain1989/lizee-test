import Image from "next/image"
import { Box, CardActions, IconButton, CardContent, Card } from "@mui/material"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import styles from "./PreviewOneProduct.module.scss"

interface PreviewOneProductProps {
  name: string
  shortDescription: string
  image: string
}

export default function PreviewOneProduct({
  name,
  image,
  shortDescription,
}: PreviewOneProductProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxWidth: {
          xs: 140,
          sm: 305,
          md: 325,
        },
      }}
    >
      <Image
        className={styles.img}
        src={image}
        layout="intrinsic"
        width="365px"
        height="320px"
        objectFit="cover"
        objectPosition="center"
        alt={shortDescription}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxHeight: {
            xs: "520px",
            sm: "270px",
          },
          justifyContent: "space-between",
        }}
      >
        <CardContent sx={{ padding: { sm: "15px", md: "20px" } }}>
          <p className={styles.title}>{name}</p>
          <p className={styles.description}>{shortDescription}</p>
        </CardContent>
        <CardActions sx={{ flexDirection: "row-reverse", paddingTop: "0" }}>
          <IconButton>
            <AddShoppingCartIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  )
}
