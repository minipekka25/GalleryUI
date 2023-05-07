import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('renders the component with given props', () => {
    const props = {
      DetailName: 'Total',
      DetailVal: 10,
    };
    const { getByText } = render(<Header {...props} />);
    console.log(getByText)
    expect(getByText('Total')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
  });

  it('renders the component without errors', () => {
    const props = {
      DetailName: 'Total',
      DetailVal: 10,
    };
    const { container } = render(<Header {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
