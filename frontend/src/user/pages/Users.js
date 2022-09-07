import React from 'react'
import UserList from '../components/UserList'

const User = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Dummy One',
      image:
        'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
      places: 3,
    },
  ]
  return <UserList items={USERS} />
}

export default User
