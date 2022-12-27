import { render, unmountComponentAtNode } from "react-dom"
import CustomButton from "./CustomButton"

let container: HTMLDivElement

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
})

it("calls the correct callback when clicked", () => {
  const onClick = jest.fn()
  render(
    <CustomButton color="primary" label="Start" onClick={onClick} />,
    container
  )
  const button = container.querySelector("button") as HTMLButtonElement
  button.dispatchEvent(new MouseEvent("click", { bubbles: true }))
  expect(onClick).toHaveBeenCalled()
})

it("displays the correct label when clicked", () => {
  render(<CustomButton color="primary" label="Start" />, container)
  const button = container.querySelector("button") as HTMLButtonElement
  button.dispatchEvent(new MouseEvent("click", { bubbles: true }))
  expect(button.textContent).toBe("Start")
})
