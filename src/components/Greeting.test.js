import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";


//CREATING TESTING SUIT 
describe('<Greting/> Component Test', () => {
    test('check greeting comonent, does it have hellow world?', () => {
        //Arrange
        render(<Greeting />)
    
        //Act ..nothing
    
        //assert -> check if hello world element is present 
        const helloworld = screen.getByText('Hello world!')
        expect(helloworld).toBeInTheDocument();
    });

    test('it is good to see you! shows in the screen', () => {
                render(<Greeting/>)

        const text = screen.getByText('it is good to see you')
        expect(text).toBeInTheDocument();
    })

    test('changes! is showing up in the screen (changed text = true)', () => {

        render(<Greeting/>)

        //Act
        const button = screen.getByRole('button')
        userEvent.click(button)

        const text = screen.getByText('Changed')
        expect(text).toBeInTheDocument();

    } )

    test('does not render good to see you is the button was clicked', () => {
        render(<Greeting/>)

        //Act
        const button = screen.getByRole('button')
        userEvent.click(button)

        const text = screen.queryByText('it is good to see you')
        expect(text).toBeNull();
    })
})






//THREE As
// arrange -> set up test data, test confitions and environment
// act -> run logic that should be tested
//assert: compare execution resutls with expected results 