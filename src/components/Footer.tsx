import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
    
          <div className="mx-auto h-10 w-auto">
                                <img
                                    className="mx-auto h-20 pb-1 w-auto"
                                    src={'/images/Logo/logos.png'}
                                    alt="Crypto-Logo"
                                />
                   
                            </div>
    

          <nav className="mt-10 text-sm border-t border-slate-400/10" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
            <NavLink href="#contact">Copyright &copy; {new Date().getFullYear()} </NavLink>
            <NavLink href="#contact">Contact</NavLink>
              <NavLink href="#testimonials">Terms</NavLink>
              <NavLink href="#pricing">Privacy Policy</NavLink>
            </div>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
