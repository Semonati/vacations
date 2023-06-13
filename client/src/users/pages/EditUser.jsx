import React from 'react'
import { useUser } from '../providers/UserProviders'

const EditUser = () => {
    const user = useUser()
  return (
    <div>EditUser</div>
  )
}

export default EditUser