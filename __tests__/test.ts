import beforeEach from 'supertest';
import {users, UsersType} from '../index';

let users1: UsersType

beforeEach( () => {
    users1 = {
        '101': {id: 101, name: 'Tanya'},
        '323212': {id: 323212, name: 'Lena'},
        '1212': {id: 1212, name: 'Nastya'},
        '1': {id: 1, name: 'Julia'}
    }
})

test('should update corresponding user', () => {
    users1['1'].name = 'Julietta'

    expect(users1['1'].name).toBe('Julietta')
})