import React from 'react'
import { useUser } from '../providers/UserProviders'

const EditUser = () => {
    const user = useUser()
    console.log(user);
  return (
    <div>EditUser</div>
  )
}

export default EditUser