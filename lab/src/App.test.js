import { render, screen } from '@testing-library/react';
import MyList from './MyList';
const toDos = ['Buy ice cream', 'Eat ice cream', 'Go to the gym'];

test('Header contains the text "Things I should stop procrastinating:"', () => {
	const myList = render(<MyList theList={toDos} />);
});
