import {Client} from 'pg'


export const client=new Client({
    host:"localhost",
    port:5432,
    user:"postgress",
    password:"Welcome@#1234",
    database:'demo'
})
