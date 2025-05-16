import Banner from '@/components/Banner'
import Header from '@/components/Header'
import React from 'react'
import OurProjects from './OurProjects'
import OurClients from './OurClients'

const ProjectComponent = () => {
  return (
    <>
    <Banner txt='projects'/>
    <OurProjects/>
    <OurClients/>
    </>
  )
}

export default ProjectComponent