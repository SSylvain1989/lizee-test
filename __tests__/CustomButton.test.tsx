import { render, fireEvent, screen } from "@testing-library/react"
import CustomButton from "../components/shared/CustomButton/CustomButton"

describe("CustomButton component", () => {
  it("calls the correct callback when clicked", () => {
    const onClick = jest.fn()
    render(<CustomButton color="primary" label="Start" onClick={onClick} />)
    const button = screen.getByText("Start")
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it("displays the correct label when clicked", () => {
    render(<CustomButton color="primary" label="Start" />)
    const button = screen.getByText("Start")
    fireEvent.click(button)
    expect(screen.getByText("Start")).toBeInTheDocument()
  })
})
