'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'vsm', label: 'Value Stream Map', href: '#vsm' },
  { id: 'waste', label: 'Waste Categories', href: '#waste' },
  { id: 'improvements', label: 'Improvement Proposals', href: '#improvements' }
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 50)

      // Update active section
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id)
        if (!element) return null
        const rect = element.getBoundingClientRect()
        return {
          id: item.id,
          distance: Math.abs(rect.top)
        }
      }).filter((section): section is { id: string; distance: number } => section !== null)

      if (sections.length > 0) {
        const closest = sections.reduce((prev, curr) => 
          prev.distance < curr.distance ? prev : curr
        )
        setActiveSection(closest.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16 px-4">
          <span className="text-lg font-semibold text-gray-900">
            VSM Analysis
          </span>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
