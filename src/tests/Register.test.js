import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "../redux/store"
import Register from "../pages/Register"

const rndr = (outlet) =>
    render(
        <Provider store={store}>
            <BrowserRouter>{outlet}</BrowserRouter>
        </Provider>
    )

test("Name, email and password value should be empty", () => {
    rndr(<Register />)

    const nameInputEl = screen.getByPlaceholderText("Nama Lengkap")
    const emailInputEl = screen.getByPlaceholderText(
        "Contoh: johndee@gmail.com"
    )
    const passwordInputEl = screen.getByPlaceholderText("Masukkan password")

    expect(nameInputEl).toHaveValue("")
    expect(emailInputEl).toHaveValue("")
    expect(passwordInputEl).toHaveValue("")
})

test("Name, email and password value on change should not be empty", () => {
    rndr(<Register />)

    const nameInputEl = screen.getByPlaceholderText("Nama Lengkap")
    const emailInputEl = screen.getByPlaceholderText(
        "Contoh: johndee@gmail.com"
    )
    const passwordInputEl = screen.getByPlaceholderText("Masukkan password")

    const nameValue = "secondhand"
    const emailValue = "secondhand@email.com"
    const passwordValue = "sh0123456789"

    fireEvent.change(nameInputEl, { target: { value: nameValue } })
    fireEvent.change(emailInputEl, { target: { value: emailValue } })
    fireEvent.change(passwordInputEl, { target: { value: passwordValue } })

    expect(nameInputEl).toHaveValue(nameValue)
    expect(emailInputEl).toHaveValue(emailValue)
    expect(passwordInputEl).toHaveValue(passwordValue)
})

test("Register button should be disabled when inputs is empty", () => {
    rndr(<Register />)

    const buttonElement = screen.getByRole("button")

    expect(buttonElement).toBeDisabled()
})

test("Register button should be enabled when inputs is not empty", () => {
    rndr(<Register />)

    const nameInputEl = screen.getByPlaceholderText("Nama Lengkap")
    const emailInputEl = screen.getByPlaceholderText(
        "Contoh: johndee@gmail.com"
    )
    const passwordInputEl = screen.getByPlaceholderText("Masukkan password")
    const buttonElement = screen.getByRole("button", {
        name: "Daftar",
    })

    const nameValue = "secondhand"
    const emailValue = "secondhand@email.com"
    const passwordValue = "sh0123456789"

    fireEvent.change(nameInputEl, { target: { value: nameValue } })
    fireEvent.change(emailInputEl, { target: { value: emailValue } })
    fireEvent.change(passwordInputEl, { target: { value: passwordValue } })

    expect(buttonElement).toBeEnabled()
})

test("Loading should be true when fetching API, and should be false after it", async () => {
    rndr(<Register />)

    const nameInputEl = screen.getByPlaceholderText("Nama Lengkap")
    const emailInputEl = screen.getByPlaceholderText(
        "Contoh: johndee@gmail.com"
    )
    const passwordInputEl = screen.getByPlaceholderText("Masukkan password")
    const buttonElement = screen.getByRole("button", {
        name: "Daftar",
    })

    const nameValue = "secondhand"
    const emailValue = "secondhand@email.com"
    const passwordValue = "sh0123456789"

    fireEvent.change(nameInputEl, { target: { value: nameValue } })
    fireEvent.change(emailInputEl, { target: { value: emailValue } })
    fireEvent.change(passwordInputEl, { target: { value: passwordValue } })
    fireEvent.click(buttonElement)

    expect(buttonElement).toHaveTextContent("Processing...")
    await waitFor(() =>
        expect(buttonElement).not.toHaveTextContent("Processing...")
    )
})
