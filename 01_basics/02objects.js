const tinderUser = {}

tinderUser.id = "123abs"
tinderUser.name = "kbs"
tinderUser.isLoggeddIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
        firstname: "kuldeep",
        lastname: "bhadauriya",
        }
    }
}

// console.log(regularUser.fullname.username);

const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2}

console.log(obj3);

