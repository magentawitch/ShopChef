import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header module", () => {
    test("Renders logo image on screen", () => {
        //Given
        render(<Header />);
        //Then
        const logo = screen.getByRole("img");
        expect(logo).toBeInTheDocument;
    })
})