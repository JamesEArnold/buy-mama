/** @jest-environment jsdom */
import { DummyComponent } from "./dummy-component";
import { render } from '@testing-library/react';

describe(DummyComponent, () => {
  it('shows the dummy text', () => {
    const { getByText } = render(<DummyComponent />)
    getByText('dummy')
  });
});