import  {Topnav}  from '@/components/AboutSection/Topnav'
import Loading from '@/components/Loading'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<Loading/>}>

    <div>
<Topnav/>

    </div>
    </Suspense>
  )
}

export default page