import type { User } from './type/User.type'
import type { Users } from './type/Users.type'

import min from 'lodash/min'

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

const minNumber: number = min([1, 2, 3])

// Prints
console.log(john.name)
console.log(joe.name)
console.log(JSON.stringify(users))
console.log(minNumber)
