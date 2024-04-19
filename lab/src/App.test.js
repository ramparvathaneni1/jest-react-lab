import { render, screen, fireEvent } from "@testing-library/react";
import MyList from "./MyList";
const toDos = ["Buy ice cream", "Eat ice cream", "Go to the gym"];

describe("Testing the To Do React App", () => {

  test('Header contains the text "Things I should stop procrastinating:"', () => {
    const myList = render(<MyList theList={toDos} />);
    const heading = myList.getByRole("heading");
    expect(heading).toHaveTextContent("Things I should stop procrastinating");
	expect(heading.tagName.toLowerCase()).toBe("h1");
  });

  test("Adding new Item should append it to the end of the list", () => {
	const myList = render(<MyList theList={toDos} />);
	const addBtn = myList.getByText("Add it!");
	const inputField = myList.getByRole("textbox");

	const newTodo = "Eat more ice cream";

	fireEvent.change(inputField, {target: {value: newTodo}});
	fireEvent.click(addBtn);

	const allListItems = myList.getAllByRole("list");
	const lastElem = allListItems[allListItems.length - 1];

	expect(lastElem).toHaveTextContent(newTodo);
  });

  test("Clicking 'Finish the list!' button should clear the list", () => {
	const myList = render(<MyList theList={toDos} />);
	const finishBtn = myList.getByText("Finished the list!");

	fireEvent.click(finishBtn);

	const allListItems = myList.queryAllByRole("listitems"); //.filter(elem => elem.tagName.toLowerCase === "ul");
	console.log("All List Items = ", allListItems);
	
	expect(allListItems.length).toBe(0);
  });
});
