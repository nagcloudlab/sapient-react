// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { shallow } from 'enzyme';
// import TodoItem from "./TodoItem";
// Enzyme.configure({ adapter: new Adapter() });

import {render, fireEvent, screen} from '@testing-library/react'
import TodoItem from "./TodoItem";
import renderer from 'react-test-renderer';
/*

    TodoItem
    -----------
    props

        - value ( todo-data )
        - onDelete

     expectations

        - should render properly
        - should render given value prop
        - should render 'completed' if todo already completed
        - should render 'not completed' if todo not completed
        - should call 'onDelete' when delete btn clicked with todo id

 */

/*

what we need ?

    => Testing Framework:

        - Jest

    => additional libraries to test react-components with Jest

        - Enzyme
        -or-
        - React Testing Lib ( New )

 */


describe("TodoItem", () => {

    // way-1 : Enzyme

    // it("should render properly",()=>{
    //     let todo={id:1,title:'sample',completed:false,userId:1}
    //     const wrapper = shallow(<TodoItem value={todo}/>);
    //     const ele=wrapper.find('tr')
    //     expect(ele).toBeTruthy()
    // })

    // it("should render given prop",()=>{
    //     let todo={id:1,title:'sample',completed:false,userId:1}
    //     const wrapper = shallow(<TodoItem value={todo}/>);
    //     const idEle=wrapper.find('.todo-id')
    //     expect(Number.parseInt(idEle.text())).toBe(todo.id)
    // })

    // way-2 : react testing lib

    it("should render given prop", () => {
        let todo = {id: 1, title: 'sample', completed: false, userId: 1}
        render(<TodoItem value={todo}/>)
        const ele=screen.getByTestId("todoid")
        expect(ele).toHaveTextContent("1")
    })

    it("should call 'onDelete' when delete btn clicked with todo id",()=>{
        const mockCallback = jest.fn(x => {});
        let todo = {id: 123, title: 'sample', completed: false, userId: 1}
        render(<TodoItem value={todo} onDelete={mockCallback}/>)
        const delBtn=screen.getByTestId("delbtn")
        fireEvent.click(delBtn)
        expect(mockCallback.mock.calls.length).toBe(1)
        expect(mockCallback.mock.calls[0][0]).toBe(todo.id)
    })


    // snapshot testing

    it('renders correctly', () => {
        const mockCallback = jest.fn(x => {});
        let todo = {id: 123, title: 'sample', completed: false, userId: 1}
        const tree = renderer
            .create(<TodoItem value={todo} onDelete={mockCallback}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });



})
