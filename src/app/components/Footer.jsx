import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className='h-[10vh] flex items-center justify-center text-2xl bg-blue-700 text-white'>&copy; Damola {year}</footer>
  )
}
