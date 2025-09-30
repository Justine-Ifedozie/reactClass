import {test, expect, beforeEach, afterEach} from "vitest";
import {cleanup, fireEvent, render, screen} from "@testing-library/react"
import BookList from "../components/BookList";

beforeEach(() => {
    render(<BookList/>)
})

afterEach(() => {
    cleanup()
})

test("that the booklist rendered on the screen", () =>{
    const listItem = screen.getAllByRole("listitem");
    expect(listItem.length).toBe(4);
})

test("that I can delete a book", () => {
    const deleteBtn = screen.getAllByText(/delete/i)
    fireEvent.click(deleteBtn[0]);
    const listItem = screen.getAllByRole("listitem");
    expect(listItem.length).toBe(3);
})