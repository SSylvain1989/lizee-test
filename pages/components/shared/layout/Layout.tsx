import React, { ReactNode } from "react"
import Nav from "../nav/Nav"

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  )
}
