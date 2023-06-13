import {
    addNewBookToUser, addNewCompany,
    LaptopType,
    makeHairstyle,
    moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from '../immutability';


test('reference type test', () => {

    const user: UserType = {
        name: 'Tanya',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(36)
    expect(awesomeUser.hair).toBe(18)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address test', () => {

    let user: UserWithLaptopType = {
        name: 'Tanya',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook', () => {

    let user: UserWithLaptopType = {
        name: 'Tanya',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradedLaptop = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedLaptop)
    expect(user.address).toBe(upgradedLaptop.address)
    expect(user.laptop).not.toBe(upgradedLaptop.laptop)
    expect(user.laptop.title).toBe('ZenBook')
    expect(upgradedLaptop.laptop.title).toBe('Macbook')
})

test('upgrade laptop to macbook', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Tanya',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react', 'ts']
    }

    const movedUserToOtherHouse = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(movedUserToOtherHouse)
    expect(user.books).toBe(movedUserToOtherHouse.books)
    expect(user.address).not.toBe(movedUserToOtherHouse.address)
    expect(movedUserToOtherHouse.address.house).toBe(99)
    expect(user.address.house).toBe(12)
    expect(user.laptop).toBe(movedUserToOtherHouse.laptop)
})

test('add new book to user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Tanya',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBookToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')

})

test('update js to ts', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Tanya',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user,'js','ts') // тут js поменяй на ts

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Tanya',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user,'js') // тут js поменяй на ts

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test('remove js book', () => {

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Tanya',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'It-Incubator'}
        ]
    }

    const userCopy = addNewCompany(user, {id: 3, title: 'Maersk'})

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[2].title).toBe('Maersk')
    expect(userCopy.companies[2].id).toBe(3)
    expect(userCopy.companies[2]).toEqual({id: 3, title: 'Maersk'})

})

test('update companies name', () => {

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Tanya',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'It-Incubator'}
        ]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.address)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company', () => {
    let companies = { 'Tanya' : [{id: 1, title: 'Епам'}, {id: 2, title: 'It-Incubator'}],
        'Artem' : [{id: 2, title: 'It-Incubator'}]};

    const newCopy = updateCompanyTitle2(companies, 'Tanya', 1, 'Epam')

    expect(newCopy['Tanya']).not.toBe(companies['Tanya'])
    expect(newCopy['Artem']).toBe(companies['Artem'])
    expect(newCopy['Tanya'][0].title).toBe('Epam')

})