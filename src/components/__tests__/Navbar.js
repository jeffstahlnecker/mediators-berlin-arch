import React from 'react'
import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from 'jest-axe'
import Navbar from '../Navbar'

expect.extend(toHaveNoViolations)

it('should be accessible', async () => {
  const { container } = render(<Navbar />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Navbar is mobile', () => {

})

test('Navbar maps Links', () => {
  const { getByText } = render(<Navbar />)
  // eslint-disable-next-line no-unused-expressions
  expect(getByText("Home")).toBeInTheDocument
})

test('Navbar links can be clicked', () => {

})