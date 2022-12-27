import * as React from "react"
import { styled } from "@mui/material/styles"
import Button, { ButtonProps } from "@mui/material/Button"
import { indigo } from "@mui/material/colors"
import { pink } from "@mui/material/colors"

export interface CustomizedButtonsProps {
  color: "primary" | "secondary"
  label: string
  darkUi?: boolean
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}
export default function CustomizedButtons({
  color,
  label,
  darkUi = false,
  type,
  onClick,
}: CustomizedButtonsProps) {
  const ColorButton = colorIs()

  function colorIs() {
    switch (color) {
      case "primary":
        if (darkUi) {
          return styled(Button)<ButtonProps>(({ theme }) => ({
            color: theme.palette.getContrastText(indigo[900]),
            fontWeight: "bold",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: pink[900],
              color: "white",
              border: "1px solid #870E4F",
            },
            textTransform: "none",
            border: "1px solid white",
          }))
        }
        return styled(Button)<ButtonProps>(({ theme }) => ({
          color: theme.palette.getContrastText(pink[700]),
          backgroundColor: pink[700],
          "&:hover": {
            backgroundColor: pink[900],
          },
          textTransform: "none",
        }))
      case "secondary":
        if (darkUi) {
          return styled(Button)<ButtonProps>(({ theme }) => ({
            color: theme.palette.getContrastText(indigo[900]),
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: indigo[400],
            },
            textTransform: "none",
          }))
        }
        return styled(Button)<ButtonProps>(({ theme }) => ({
          color: theme.palette.getContrastText(indigo[900]),
          backgroundColor: indigo[900],
          "&:hover": {
            backgroundColor: indigo[800],
          },
          textTransform: "none",
        }))
    }
  }
  return (
    <ColorButton fullWidth type={type ?? "button"} onClick={onClick}>
      {label}
    </ColorButton>
  )
}
