
import { Database } from "./database.js";
import { randomUUID } from 'node:crypto'
import { buildRoadPath } from "./utils/build-road-path.js";

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: '/users',
        handler: (req, res) => {
            const users = database.select('users')
            return res.end(JSON.stringify(users))
        }
    },
    {
        method: 'POST',
        path: buildRoadPath('/users'),
        handler: (req, res) => {
            
        const {name , email} = req.body

        const user ={
            id: randomUUID(),
            name,
            email
        }

        database.insert('users',user)

        return res.writeHead(201).end()
        }
    },
    {
        method: 'DELETE',
        path: buildRoadPath('/users/:id'),
        handler: (req, res) => {
            return res.end()
        }
    },
    {
        method: 'PUT',
        path: '/users',
        handler: (req, res) => {
            //CODE TO UPDATE
        }
    },

]