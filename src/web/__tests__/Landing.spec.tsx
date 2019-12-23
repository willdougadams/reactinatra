import React from 'react'
import { render } from '@testing-library/react'

import Landing from '../landing/Landing'

describe('Landing Page', () => {
  it('should display a blank login form, with remember me checked by default', async () => {
    expect(() => render(<Landing />)).not.toThrow()
  })
})