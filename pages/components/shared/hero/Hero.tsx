import Image from "next/image"
import Container from "@mui/material/Container"
import styles from "./Hero.module.scss"
import DatePickerRange from "../datePickerRange/DatePickerRange"

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
      </Container>
    </div>
  )
}
