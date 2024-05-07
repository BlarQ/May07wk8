import React from 'react'
import CourseCard from './CourseCard'

export default function Course() {
  return (
    <div className='grid grid-cols-3 gap-3'>
        <CourseCard title='html' desc='all about elements' num='2' social='instagram' color='bg-red-200' tcolor='text-red-700'/>
        <CourseCard title='css' desc='styling components' num='3' social='twitter' color='bg-green-500' tcolor='text-black'/>
        <CourseCard title='javascript' desc='interactivity hall of fame' num='4' social='facebook' color='bg-blue-200' tcolor='text-blue-600'/>
        <CourseCard title='tailwind' desc='a framework like no other' num='4' social='youtube' color='bg-cyan-300' tcolor='text-red-500'/>
        <CourseCard title='react' desc='make it easy to write' num='5' social='linkedin' color='bg-yellow-300' tcolor='text-blue-500'/>
    </div>
  )
}
