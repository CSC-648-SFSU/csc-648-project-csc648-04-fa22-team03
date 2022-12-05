import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../pages/Home';


test('should render home page', () => {
    render(<Home/>);
    const homeElement = screen.getByTestId('home-1');
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveTextContent('Home Page');
})