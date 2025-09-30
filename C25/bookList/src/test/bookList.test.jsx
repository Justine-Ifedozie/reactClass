import {test, expect} from "vitest";
import {render, screen} from "@testing-library/react"
import BookList from "../components/BookList";



// test ("add two numbers", () => {
//     let sum = 2+1;
//     expect(sum).toBe(3);
// })

test("that the booklist rendered on the screen", () =>{
    render(<BookList/>)
    const listItem = screen.getAllByRole("listitem")
    expect(listItem).toBeTruthy()
})