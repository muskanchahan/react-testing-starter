// import React from 'react'
// import { it, expect, describe } from 'vitest'
// import {render,screen} from "@testing-library/react"
//  import TermsAndConditions from "../../src/components/TermsAndConditions"
//  import "@testing-library/jest-dom/vitest"
//  import userEvent from "@testing-library/user-event"
 

//  describe('TermsAndConditions', () => {
//      it('should rander with corret text and intial state', () => {
//         render(<TermsAndConditions/>);
//         const heading=screen.getByRole("heading");
//         expect(heading).toBeInTheDocument();
//         expect(heading).toHaveTextContent(/Terms & Conditions/)

//         const checkbox=screen.getByRole("checkbox");
//         expect(checkbox).toBeInTheDocument();
//         expect(checkbox).not.toBeChecked();

//        const button= screen.getByRole('button');
//        expect(button).toBeInTheDocument();
//        expect(button).toHaveTextContent(/submit/i);
//        expect(button).toBeDisabled()
//      })


//      it('should enable the button when the checked is checked ', async() => {
//         render(<TermsAndConditions/>);

//         const checkbox=screen.getByRole("checkbox");
//         const user=userEvent.setup();
//          await user.click(checkbox);
//          expect(screen.getByRole("button")).toBeEnabled();
//      })
//  })




import React from 'react'
import { it, expect, describe } from 'vitest'
import {render,screen} from "@testing-library/react"
 import TermsAndConditions from "../../src/components/TermsAndConditions"
 import "@testing-library/jest-dom/vitest"
 import userEvent from "@testing-library/user-event"
 

 describe('TermsAndConditions', () => {
    const renderComponent=()=>{
        render(<TermsAndConditions/>);

        return{
            heading: screen.getByRole("heading"),
            checkbox:screen.getByRole("checkbox"),
            button:screen.getByRole("button")
        }
    }


     it('should rander with corret text and intial state', () => {
         const {heading,checkbox,button} =renderComponent()

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Terms & Conditions/)

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

       expect(button).toBeInTheDocument();
       expect(button).toHaveTextContent(/submit/i);
       expect(button).toBeDisabled()
     })


     it('should enable the button when the checked is checked ', async() => {
        const {checkbox,button} =renderComponent()

        const user=userEvent.setup();
         await user.click(checkbox);
         expect(screen.getByRole("button")).toBeEnabled();
     })
 })