// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TransformerMeasure title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TransformerMeasure/i);
    expect(titleElement).toBeInTheDocument();
});
