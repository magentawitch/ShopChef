import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

jest.mock("../ShoppingList/ShoppingList", () => () => <div data-testid="shopping-list">Mock Shopping List</div>);
jest.mock("../BatchCookingList/BatchCookingList", () => () => <div data-testid="batch-cooking-list">Mock Batch Cooking List</div>);

describe("Home module", () => {

    test("Home module renders ShoppingList", () => {
        //Given
        render(<Home />);
        //Then
        const shoppingListModule = screen.getByTestId("shopping-list");
        expect(shoppingListModule).toBeInTheDocument();
    });

    test("Home module renders BatchCookingList", () => {
        //Given
        render(<Home />);
        //Then
        const batchCookingListModule = screen.getByTestId("batch-cooking-list");
        expect(batchCookingListModule).toBeInTheDocument();
    });

    test("Section titles appear in the correct order", () => {
        //When
        const { container } = render(<Home />);
        const sectionContainers = container.querySelectorAll(".sectionContainer");
        //Then
        expect(sectionContainers[0]).toHaveTextContent("Things to buy...");
        expect(sectionContainers[1]).toHaveTextContent("This week's recipes...");
    });

})