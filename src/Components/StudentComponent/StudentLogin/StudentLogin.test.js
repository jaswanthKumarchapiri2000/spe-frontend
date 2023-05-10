import StudentLogin from './StudentLogin';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';





describe('StudentLogin component', () => {
  test('should update the state when the user enters their email and password', () => {
    const { getByLabelText } = render(<Router><StudentLogin /></Router>);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('john@example.com');
    expect(passwordInput.value).toBe('password123');
  });
});
