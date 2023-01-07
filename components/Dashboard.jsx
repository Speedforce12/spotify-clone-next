import React from 'react'
import Sidebar from './Sidebar'
import MainArea from './MainArea'
import RightPanel from './RightPanel'

const Dashboard = () => {
  return (
    <div className='flex min-h-screen min-w-max lg:pb-24'>
          <Sidebar />
          <MainArea />
          <RightPanel />
    </div>
  )
}

export default Dashboard