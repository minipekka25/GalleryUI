import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BreadCrumbs from '../components/BreadCrumbs';


jest.mock('next/router', () => ({
    useRouter: () => ({
      isReady: true,
      push: jest.fn(),
    }),
  }));

describe('BreadCrumbs', () => {


  const crumbs = [
    { text: 'Home', uri: '/' },
    { text: 'Products', uri: '/products' },
    { text: 'Shirts', uri: '/products/shirts' },
  ];

  it('renders the component', () => {
    const { getByText } = render(<BreadCrumbs crumbs={crumbs} />);
    expect(getByText('Home /')).toBeInTheDocument();
    expect(getByText('Products /')).toBeInTheDocument();
    expect(getByText('Shirts /')).toBeInTheDocument();
  });

});
