import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import styles from "./Nav.module.scss"

export default function Nav() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false)
      } else {
        setShow(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  })

  return (
    <>
      <CssBaseline />

      <header className={`${styles.header} ${!show && styles.hidden}`}>
        <Container maxWidth="xl">
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  <Image
                    src="/images/lizee_logo.avif"
                    alt="the brand logo of lizee company, logo is blue and purple"
                    layout="fixed"
                    width="96"
                    height="44"
                  />
                </a>
              </Link>
            </div>

            <div className={styles["navigation-right"]}>
              <div>
                <Button
                  startIcon={<AccountCircleIcon />}
                  sx={{
                    color: "black",
                    textTransform: "Capitalize",
                  }}
                >
                  My account
                </Button>
              </div>
              <div>
                <Button
                  sx={{
                    color: "black",
                    textTransform: "Capitalize",
                  }}
                  startIcon={<HelpOutlineOutlinedIcon />}
                >
                  Help page
                </Button>
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </>
  )
}
