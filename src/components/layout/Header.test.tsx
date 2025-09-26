import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header testing', () => {
    it('Renders Header component',async () => {
        render(<Header />)
        const brandHeading = screen.getByRole('heading');

        expect(brandHeading).toHaveTextContent('ShortIt')
    })
})