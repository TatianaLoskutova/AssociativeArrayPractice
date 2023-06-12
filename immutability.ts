export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house?: number
    }
}

export type LaptopType  = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{id: number, title: string }>
}


// это ООП метод, когда функция меняет объект и ничего не выплевывает
// function hairdresser(u: UserType, power: number) {
//     u.hair = u.hair / power
// }

// в Функциональной парадигме, функция должна быть чистой и выплевывать результат, не меняя, делая копию
// и копию уже менять

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,  // через spread - это shallow(поверхностная копия)
        hair: u.hair / power // тут, ЗАМЕНИ у копии свойства hair на нужное
    } // новый объект куда мы запихнули данные из старого
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    /*  copy.address = {
          ...u.address,
          city: city
      }*/
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType,
                                     house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function upgradeUserLaptop(u:UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBookToUser(u:UserWithLaptopType & UserWithBooksType,
                                  newBook: string) {
   return {
        ...u,
       books: [...u.books, newBook] // вместо пуша, таким макаром добавляем
    }
    // copy.books.push(newBook)
}

export const updateBook = (u:UserWithLaptopType & UserWithBooksType,
                                 oldBook: string, newBook: string) => ({
        ...u,
        books: u.books.map(b => b === oldBook ? newBook: b)
    })

    // books: u.books.map(b => {
    //     if (b === oldBook) return newBook
    //     else return b
    // })

export const removeBook = (u:UserWithLaptopType & UserWithBooksType,
                           bookForDelete: string) => ({
    ...u,
    books: u.books.filter(b => b !== bookForDelete) // Тех что НЕ js мы сохраняем в новый массив, а js удал-ся
})

export const addNewCompany = (u:UserWithLaptopType & WithCompaniesType,
                                 newCompany: {id: number, title: string}) => ({
    ...u,
    companies: [...u.companies,newCompany]
    })

