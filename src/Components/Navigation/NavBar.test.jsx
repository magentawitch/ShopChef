import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar Module", () => {

    test("Home Link has 'active' class once clicked", async () => {
        //Given
        render(
        <MemoryRouter initialEntries={["/"]}>
            <NavBar />
        </MemoryRouter>);
        const homeLink = screen.getByRole("link", { name: /home/i });
        const user = userEvent.setup();
        //When
        await user.click(homeLink);
        //Then
        expect(homeLink).toHaveClass("active");

    });

    test("New Recipe Link has 'active' class once clicked", async () => {
        //Given
        render(
        <MemoryRouter initialEntries={["/"]}>
            <NavBar />
        </MemoryRouter>);
        const homeLink = screen.getByRole("link", { name: /new recipe/i });
        const user = userEvent.setup();
        //When
        await user.click(homeLink);
        //Then
        expect(homeLink).toHaveClass("active");

    });

    test("My Recipes Link has 'active' class once clicked", async () => {
        //Given
        render(
        <MemoryRouter initialEntries={["/"]}>
            <NavBar />
        </MemoryRouter>);
        const homeLink = screen.getByRole("link", { name: /my recipes/i });
        const user = userEvent.setup();
        //When
        await user.click(homeLink);
        //Then
        expect(homeLink).toHaveClass("active");

    });
})