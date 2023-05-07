import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlbumList from '../pages/albums';

jest.mock('next/router', () => ({
  useRouter: () => ({
    isReady: true,
    query: { userId: '1' },
    push: jest.fn(),
  }),
}));

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [{ userId: 1, id: 1, title: 'test album' }] })),
}));

describe('AlbumList', () => {
  it('should render the component with correct data', async () => {
    render(<AlbumList />);

    expect(await screen.findByText('Total Albums')).toBeInTheDocument();
    expect(screen.getByText('test album')).toBeInTheDocument();
  });
});
