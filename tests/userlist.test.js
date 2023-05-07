import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import UserList from '../pages/index';

jest.mock('next/router', () => ({
    useRouter: () => ({
      isReady: true,
      push: jest.fn(),
    }),
  }));
  
  jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: [
        { id: 1, name: 'John Doe', username: 'johndoe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', username: 'janedoe', email: 'jane@example.com' },
      ] })),
  }));

describe('UserList', () => {

  it('should render a list of users', async () => {
    render(<UserList />);

    expect(await screen.findByText('John Doe')).toBeInTheDocument();
    expect(await screen.findByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    expect(screen.getByText('janedoe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
  });

  it('should render the number of users', async () => {
    const users = [{ id: 1, name: 'John Doe', username: 'johndoe', email: 'john@example.com' }];
    axios.get.mockResolvedValueOnce({ data: users });

    render(<UserList />);

    expect(await screen.findByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should render zero users when the API returns an empty list', async () => {
    axios.get.mockResolvedValueOnce({ data: [] });

    render(<UserList />);

    expect(await screen.findByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  
});
