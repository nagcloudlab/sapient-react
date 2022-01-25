import {screen, render, cleanup, fireEvent} from '@testing-library/react'

import Counter from './Counter'

it("should render properly", () => {
    render(<Counter/>)
    const rootElement = screen.getByTestId('root')
    expect(rootElement).toBeInTheDocument()
})

it("should have title", () => {
    render(<Counter/>)
    const titleElement = screen.getByTestId('title')
    expect(titleElement.textContent).toMatch(/^counter app$/i)
})


it("should have initial count with zero", () => {
    render(<Counter/>)
    const countElement = screen.getByTestId('count')
    expect(countElement.textContent).toBe("0")
})


it("should have step count as 1", () => {
    render(<Counter/>)
    const inputElement = screen.getByTestId('input')
    expect(inputElement.value).toBe("1")
})

it("should change step count ", () => {
    render(<Counter/>)
    const inputElement = screen.getByTestId('input')
    expect(inputElement.value).toBe("1")
    fireEvent.change(inputElement, {target: {value: 5}})
    expect(inputElement.value).toBe("5")
})

it("add button renders with + ", () => {
    render(<Counter/>)
    const btnElement = screen.getByTestId('add-btn')
    expect(btnElement.textContent).toBe("+")
})

it("subtract button renders with - ", () => {
    render(<Counter/>)
    const btnElement = screen.getByTestId('sub-btn')
    expect(btnElement.textContent).toBe("-")
})


it("increment", () => {
    render(<Counter/>)
    const btnElement = screen.getByTestId('add-btn')
    const countElement = screen.getByTestId('count')
    fireEvent.click(btnElement)
    expect(countElement.textContent).toBe("1")
})


it("decrement", () => {
    render(<Counter/>)
    const btnElement = screen.getByTestId('sub-btn')
    const countElement = screen.getByTestId('count')
    fireEvent.click(btnElement)
    expect(countElement.textContent).toBe("-1")
})


it("increment with new step-count", () => {
    render(<Counter/>)
    const btnElement = screen.getByTestId('add-btn')
    const countElement = screen.getByTestId('count')
    const inputElement = screen.getByTestId('input')
    fireEvent.change(inputElement, {target: {value: 50}})
    fireEvent.click(btnElement)
    expect(countElement.textContent).toBe("50")
    fireEvent.click(btnElement)
    expect(countElement.textContent).toBe("100")
})
