import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Result from './Result';
import '@testing-library/jest-dom';


jest.mock('axios');

describe('Result component', () => {
  test('renders exam list heading', async () => {
    axios.get.mockResolvedValueOnce({
      data: [],
    });

    render(<Result />);

    const headingElement = await screen.findByText(/exam list/i);
    expect(headingElement).toBeInTheDocument();
  });


});
