// import knex from '../../lib/utils.js'
const knex = require('knex')({
    client: 'postgresql',
    connection: {
      host: 'db.cksknkwgxhanhtilnycs.supabase.co',
      user: 'postgres',
      password: 'oR2b5sWTQP6qehEk',
      database: 'postgres'
    },
    pool: { min: 0, max: 7 }
})

export default async function handler(req, res) {
    
    const { firstName, lastName, email, password, dob, gender, role } = req.body;

    if (req.method === 'POST') {
        try {
            const user = await knex.from('users').select('*').where({ email: email })
            
            res.status(200).json({user: user[0]})

        } catch (error) {
            res.status(400).json({ error: 'User not found!' })
        }
    }
  }
  