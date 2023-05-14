import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import {render} from '@testing-library/react'

import App from '../App'

function renderWrapperContainer (children, initialEntries) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {children}
    </MemoryRouter>
  )
}

it('should render', () => {
  const {asFragment} = renderWrapperContainer(<App />)
  expect(asFragment()).toMatchSnapshot()
})
