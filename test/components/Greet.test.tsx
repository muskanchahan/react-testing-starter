import React from 'react'
import { it, expect, describe } from 'vitest'
import {render,screen} from "@testing-library/react"
 import  Greet from "../../src/components/Greet"
 import "@testing-library/jest-dom/vitest"

describe('group', () => {
    it('should render hello with the name when name is provided ', () => {
        render(<Greet name="Mash"/>);
        const heading= screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/hello Mash/i);
    });

    it('should render login button when name is not provided ', () => {
        render(<Greet/>);
        const button= screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    });

})