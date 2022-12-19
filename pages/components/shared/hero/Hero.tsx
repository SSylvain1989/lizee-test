import Image from "next/image"
import DatePickerRange from "../datePickerRange/DatePickerRange"
import CustomButton from "../CustomButton/CustomButton"
import { Box, Container, Stack } from "@mui/material"
import styles from "./Hero.module.scss"

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Image
          className={styles.background}
          src="/images/montain.avif"
          layout="fill"
          alt="Three men on bike at the mountain"
        />
      </div>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={styles["content-wrapper"]}>
          <h1>
            Lizee Reuse <br /> platform
          </h1>
          <p>
            <strong>Rent or buy our products on demand.</strong>
          </p>
          <p>Delivered when you need it.</p>
          <DatePickerRange />
          <Box
            sx={{
              margin: { xs: "0 auto", sm: "0" },
              maxWidth: "450px",
              justifyContent: "start",
            }}
          >
            <Box display="flex" gap={2} marginTop={2}>
              <CustomButton color={"secondary"} label="Go to shop" />
              <CustomButton
                color={"primary"}
                label="See our pack"
                darkUi={true}
              />
            </Box>

            <Stack
              direction={{ xs: "row", sm: "row" }}
              spacing={{ xs: 1, sm: 6 }}
              justifyContent={{ xs: "center", sm: "start" }}
              mt={2}
            >
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                sx={{
                  border: "1px solid white",
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  width: { xs: "93px", sm: "120px" },
                }}
              >
                <Image
                  src="/images/Icon_shipping.svg"
                  layout="intrinsic"
                  width={91}
                  height={48}
                  alt="Truck delivery with a clock on the back of the truck"
                />
                <p className={styles["small-info"]}>Delivery on time</p>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                sx={{
                  border: "1px solid white",
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  width: { xs: "93px", sm: "120px" },
                }}
              >
                <Image
                  src="/images/Icon_wash.svg"
                  layout="intrinsic"
                  width={44}
                  height={48}
                  alt="Truck delivery with a clock on the back of the truck"
                />
                <p className={styles["small-info"]}>
                  Hygiene and quality control
                </p>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                sx={{
                  border: "1px solid white",
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  width: { xs: "93px", sm: "120px" },
                }}
              >
                <Image
                  src="/images/Icon_Boxes.svg"
                  layout="intrinsic"
                  width={49}
                  height={48}
                  alt="Truck delivery with a clock on the back of the truck"
                />
                <p className={styles["small-info"]}>Easy returns</p>
              </Box>
            </Stack>
          </Box>
        </div>
      </Container>
    </div>
  )
}
