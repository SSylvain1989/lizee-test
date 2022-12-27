import { render, screen, waitFor } from "@testing-library/react"
import CustomButton from "./CustomButton"

describe("Button", () => {
  function getButton() {
    return screen.getAllByRole("button")[0]
  }

  it("should be display a button", () => {
    render(<CustomButton color={"primary"} label={""} />)
    const button = getButton()
    expect(button).toBeInTheDocument()
  })
  it("should not have style 'background-color : transparent' if button is darkUi={false} and color='primary'", async () => {
    render(<CustomButton darkUi={false} color="primary" label={""} />)
    const button = getButton()
    await waitFor(() => {
      expect(button).not.toHaveStyle("background-color: transparent")
    })
  })
  it("should have style 'background-color : transparent' if button is darkUi={false} and color='primary'", async () => {
    render(<CustomButton darkUi={true} color="primary" label={""} />)
    const button = getButton()
    await waitFor(() => {
      expect(button).toHaveStyle("background-color: transparent")
    })
  })
  it("should have style 'background-color : #c2185b' if button is darkUi={false} and color='primary'", async () => {
    render(<CustomButton darkUi={false} color="primary" label={""} />)
    const button = getButton()
    await waitFor(() => {
      expect(button).toHaveStyle("background-color: #c2185b")
    })
  })
  it("should not have style 'background-color : #1a237e' if button is darkUi={false} and color='primary'", async () => {
    render(<CustomButton darkUi={false} color="primary" label={""} />)
    const button = getButton()
    await waitFor(() => {
      expect(button).not.toHaveStyle("background-color: #1a237e")
    })
  })
})

