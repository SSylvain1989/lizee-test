import Image from "next/image"
import Container from "@mui/material/Container"
import DatePickerRange from "../datePickerRange/DatePickerRange"
import CustomButton from "../CustomButton/CustomButton"
import Box from "@mui/material/Box"
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
      <Container maxWidth="xl">
        <div className={styles["content-wrapper"]}>
          <h1>Lizee Reuse platform</h1>
          <strong>Rent or buy our products on demand.</strong>
          <p>Delivered when you need it.</p>
          <DatePickerRange />
        </div>
        <Box display="flex" gap={2} marginTop={2}>
          <CustomButton color={"secondary"} label="Go to shop" />
          <CustomButton color={"primary"} label="See our pack" darkUi={true} />
        </Box>

        <Box display="flex" gap={2} marginTop={2}>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            style={{
              border: "1px solid white",
              color: "white",
              borderRadius: "4px",
              padding: "8px",
              width: "90px",
              height: "95px",
            }}
          >
            <Image
              src="/images/Icon_shipping.svg"
              layout="fixed"
              width={61}
              height={32}
              alt="Truck delivery with a clock on the back of the truck"
            />
            <p className={styles["small-info"]}>Delivery on time</p>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            style={{
              border: "1px solid white",
              color: "white",
              borderRadius: "4px",
              padding: "8px",
              width: "90px",
              height: "95px",
            }}
          >
            <Image
              src="/images/Icon_wash.svg"
              layout="fixed"
              width={29}
              height={32}
              alt="Truck delivery with a clock on the back of the truck"
            />
            <p className={styles["small-info"]}>Hygiene and quality control</p>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            style={{
              border: "1px solid white",
              color: "white",
              borderRadius: "4px",
              padding: "8px",
              width: "90px",
              height: "95px",
            }}
          >
            <Image
              src="/images/Icon_Boxes.svg"
              layout="fixed"
              width={33}
              height={32}
              alt="Truck delivery with a clock on the back of the truck"
            />
            <p className={styles["small-info"]}>Easy returns</p>
          </Box>
        </Box>
      </Container>
    </div>
  )
}
