import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import axios from 'axios';
import '@testing-library/jest-dom';
import Exam from './Exam';

// mock the axios module
jest.mock('axios', () => ({
  get: jest.fn(),
}));


test('displays a message when no exams are found for a category', async () => {
  // set up fake data for the mock axios response
  const category = 'English';
  const fakeData = [];

  // mock the axios get request to return the fake data
  axios.get.mockResolvedValue({ data: fakeData });

  // render the Exam component with the category parameter in a MemoryRouter
  render(
    <MemoryRouter initialEntries={[`/StudentDashboard/Exam/${category}`]}>
      <Route path="/StudentDashboard/Exam/:category">
        <Exam />
      </Route>
    </MemoryRouter>
  );

  // wait for the message to be displayed on the page
  const message = await screen.findByText(`No exams found for category "${category}"`);

  // verify that the correct message is displayed on the page
  expect(message).toBeInTheDocument();
});
