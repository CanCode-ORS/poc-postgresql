import NextAuth from "next-auth";
import {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
// import Providers from 'next-auth/providers'

// const knex = require('knex')({
//     client: 'postgresql',
//     connection: {
//       host: 'db.cksknkwgxhanhtilnycs.supabase.co',
//       user: 'postgres',
//       password: 'oR2b5sWTQP6qehEk',
//       database: 'postgres'
//     },
//     pool: { min: 0, max: 7 }
// })

export const authOptions = {
    session: {
        strategy: 'jwt'
    },

    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            // credentials: {
            //     email: { label: "Email", type: "email", placeholder: "me@email.com"}, password: {label: "Password", type: "password" },
            // },
            authorize(credentials, req) {
                const {email, password} = credentials;

                // perform your login logic
                if (email !== 'john@gmail.com' || password !== '1234') {
                    throw new Error("Invalid credentials")
                }

                //if all good
                return {id: '1234', name: "John Doe", email: 'john@gmail.com'}
            }
        }),

        GoogleProvider({
            // clientId: process.env.GITHUB_ID,
            clientId: '556858090004-lotu7q76nl1mto5he8hi0as1ritr6ua1.apps.googleusercontent.com',
            // clientSecret: process.env.GITHUB_SECRET,
            clientSecret: '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',
        }),
    ],
    pages: {
        signIn: '/teams',
        signOut: '/login',
    }
}

export default NextAuth(authOptions);