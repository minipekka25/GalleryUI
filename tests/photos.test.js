import { render, screen, act } from '@testing-library/react';
import axios from 'axios';
import PhotosList from '../pages/photos';
import '@testing-library/jest-dom';


jest.mock('axios');

jest.mock('next/router', () => ({
    useRouter: () => ({
      isReady: true,
      query: { userId: '1', albumId:"1" },
      push: jest.fn(),
    }),
  }));

describe('PhotosList', () => {
  test('renders photos list component', async () => {
    const data = [
      { albumId: 1, id: 1, title: 'photo1', url: 'url1', thumbnailUrl: 'thumbnailUrl1' },
      { albumId: 1, id: 2, title: 'photo2', url: 'url2', thumbnailUrl: 'thumbnailUrl2' },
    ];
    axios.get.mockResolvedValue({ data });
    await act(async () => {
      render(<PhotosList />);
    });
    expect(screen.getByText('photo1')).toBeInTheDocument();
    expect(screen.getByText('photo2')).toBeInTheDocument();
  });
});
