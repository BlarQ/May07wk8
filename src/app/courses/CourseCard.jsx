import Link from 'next/link'
import React from 'react'

export default function CourseCard({title, desc, num, social, color, tcolor}) {
  return (
    <div className={`border-blue-500 border-4 rounded-md shadow-lg text-center text-white`}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>{num}</p>
      <p className={`${color} w-3/5 py-2 rounded-sm m-auto my-4 ${tcolor}`}><Link href={`https://www.${social}.com`} target='_blank'>{social}</Link></p>
    </div>
    
  )
}
