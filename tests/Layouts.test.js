import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../components/layouts';

describe('Layout component', () => {
  it('renders children', () => {
    const ChildComponent = () => <div>Child component</div>;
    render(
      <Layout>
        <ChildComponent />
      </Layout>
    );
    expect(screen.getByText('Child component')).toBeInTheDocument();
  });

  it('displays creator name', () => {
    render(<Layout />);
    expect(screen.getByText('Gowri Shankar S')).toBeInTheDocument();
  });

  it('displays task title', () => {
    render(<Layout />);
    expect(screen.getByText('Task :')).toBeInTheDocument();
    expect(screen.getByText('Gallery UI')).toBeInTheDocument();
  });

  it('displays about section', () => {
    render(<Layout />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('The right place to preserve your memories with ease')).toBeInTheDocument();
    expect(screen.getByText('Bookmarks')).toBeInTheDocument();
    expect(screen.getByText('Folders')).toBeInTheDocument();
  });

  it('displays navigation items', () => {
    render(<Layout />);
    expect(screen.getByText('{ Home }')).toBeInTheDocument();
    expect(screen.getByText('Your Moments')).toBeInTheDocument();
    expect(screen.getByText('Your album')).toBeInTheDocument();
  });
});
