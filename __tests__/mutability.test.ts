function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}
// Ссылочные типы это массивы и объекты, у них методы, свойства есть.
test('reference type test', () => {

    const user: UserType = {
        name: 'Tanya',
        age: 35,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(36)

    const superman = user // т.к user ссылка на объект, то у супермена ключи от хаты и он может менять объект
    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference test', () => {

    const users = [
        {
            name: 'Tanya',
            age: 35
        },
        {
            name: 'Tanya',
            age: 35
        }
    ]
    const admins = users
    admins.push({name: 'Bandugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandugan', age: 10})

})
// Примитивы, у них нет методов и свойств
test('value type test', () => {
    const usersCount = 100

    let adminsCount = usersCount // =const adminsCount = 100
    //adminsCount = adminsCount + 1 // = adminsCount = 101
    adminsCount++
})

test('reference type test', () => {

    const user: UserType = {
        name: 'Tanya',
        age: 35,
        address: {
            title: 'Minsk'
        }
    }

    // const addr = user.address

    const user2: UserType = {
        name: 'Lena',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Kannary';
// Два объекта могут быть равны только если это один объект!!! Пример близнецов
    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Kannary')

    // {} === {} FALSE  anf [] === [] FALSE
})

test('reference type test2', () => {
    const address = {
        title: 'Minsk'
    }

    const user: UserType = {
        name: 'Tanya',
        age: 35,
        address: address
    }

    const user2: UserType = {
        name: 'Lena',
        age: 30,
        address: address
    }

    address.title = 'Minsk City';

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Minsk City')


})

test('reference type array test', () => {
    const address = {
        title: 'Minsk'
    }

    const user: UserType = {
        name: 'Tanya',
        age: 35,
        address: address
    }

    const user2: UserType = {
        name: 'Lena',
        age: 30,
        address: address
    }

    const users = [ user, user2, {name: 'Misha', age: 4, address: address} ]
    //users[2]. т.к на Мишу нет ссылки(переменной), то му стучимся к нему через индекс
    const admins = [user, user2]
    admins[0].name = 'Tatiana'

    expect(users[0].name).toBe('Tatiana')
    expect(user.name).toBe('Tatiana')

})

test('sort array test', () => {

    const letters = ['c', 'd', 'a', 'z', 'e']
    letters.sort()
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])

})

function pasportist(letters: any) {
    const copy = [...letters].sort()
    console.log(letters)
}

test('sort array test 2', () => {

    const letters = ['c', 'd', 'a', 'z', 'e']
    pasportist(letters)
    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])

})