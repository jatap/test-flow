// @flow

type User = {
  name: string,
  country: string,
  age: number
}

type Users = Array<User>

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
