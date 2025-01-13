import { ContactCmpt } from '@/components/AboutSection/components2/ContactCmpt'
import Loading from '@/components/Loading'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<Loading/>}>

    <div><ContactCmpt/></div>
    </Suspense>
  )
}

export default page