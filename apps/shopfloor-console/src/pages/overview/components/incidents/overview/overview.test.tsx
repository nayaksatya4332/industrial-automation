import { act } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';
import IncidentsOverview from './index';

test(`add filter input`, async () => {
  const screen = render(<IncidentsOverview></IncidentsOverview>);
  const input = screen.getByLabelText('Filter devices') as HTMLInputElement;

  expect(input).toBeInTheDocument();
  await act(() =>
    fireEvent.change(input, { target: { value: 'robo1-net-sw17' } })
  );

  const items = screen.queryAllByTestId('incident-item');
  await waitFor(() => expect(items).toHaveLength(1));
});
