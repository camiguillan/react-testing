import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from "./Async";



describe('Async Testing', () => {
    test('Render posts correctly', async ()  => {
        window.fetch =  jest.fn() //creating a mock function -> we overrife thefetch function with the mock function 
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'first post' }]  // ✅ FIXED: added return value
          });
      


        render(<Async/>)

        const list = await screen.findAllByRole('listitem') //we have more than 1 item qith the specified role
        //find all by role -> retruns a promise -> re evaluate till success
        expect(list).not.toHaveLength(0); // initially there are no list items, after the fetch is made, the component is re rendered and the list is populated 
    } )
})

//MOCK 
//on testing -> we dont want to send data to servers and mess up with the data
//MOCK=>  dummy function that does not send real requests while testing.