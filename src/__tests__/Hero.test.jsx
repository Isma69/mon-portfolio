import { render, screen } from '@testing-library/react'
import Hero from '../sections/Hero.jsx'

describe('Hero section', () => {
  it('renders name and CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText(/Bonjour, je suis/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Votre Nom/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Voir mes projets/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Me contacter/i })).toBeInTheDocument()
  })
})


