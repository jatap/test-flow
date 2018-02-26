// @flow

import type { User } from './type/User'
import type { Users } from './type/Users'

const john: User = {
  name: 'John Doe',
  country: 'Spain',
  age: 44
}

const joe: User = {
  name: 'Joe Doe',
  country: 'Spain',
  age: 44
}

const users: Users = [john, joe]

console.log(john.name)
console.log(joe.name)
console.log(JSON.stringify(users))
