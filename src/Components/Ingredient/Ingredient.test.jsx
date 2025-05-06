import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Ingredient from "./Ingredient";
import RecipeContext from "../../Context/RecipeContext";

describe("Ingredient module", () => {

    const mockIngredient = {name: "mockIngredient", amount: "1", unit: "mockUnit", index: 1}

    test("When the Remove Button is clicked, the event is sent", async () => {
        //Given
        const mockRemoveButton = jest.fn();
        const user = userEvent.setup();
        render(
            <RecipeContext.Provider value={{ removeIngredient: mockRemoveButton }}>
                <Ingredient name={mockIngredient.name} amount={mockIngredient.amount} unit={mockIngredient.unit} index={mockIngredient.index}/>
            </RecipeContext.Provider>
        );
        const removeButton = screen.getByRole("button");
        //When
        await user.click(removeButton);
        //Then
        expect(mockRemoveButton).toHaveBeenCalled();
    });

    test("Renders ingredient information correctly", () => {
        //When
        render(
            <RecipeContext.Provider value={{ removeIngredient: jest.fn() }}>
                <Ingredient name={mockIngredient.name} amount={mockIngredient.amount} unit={mockIngredient.unit} index={mockIngredient.index}/>
            </RecipeContext.Provider>
        );
        //Then
        expect(screen.getByText(/1 mockunit mockingredient/i)).toBeInTheDocument();
        expect(screen.getByText("x")).toBeInTheDocument();
    });

})


