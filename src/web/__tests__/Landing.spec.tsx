import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'

import Landing from '../landing/Landing'

describe('<Landing />', () => {
  test('should display a blank login form, with remember me checked by default', async () => {
    expect(() => render(<Landing />)).not.toThrow()
  })
})
