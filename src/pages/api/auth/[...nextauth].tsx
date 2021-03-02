import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


const options = {
    // Configure one or more authentication providers
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
      // ...add more providers here
    ],
  
    // A database is optional, but required to persist accounts in a database
    database: process.env.NEXTAUTH_URL,
    callbacks: {
      /**
       * @param  {object} user     User object
       * @param  {object} account  Provider account
       * @param  {object} profile  Provider profile 
       * @return {boolean|string}  Return `true` to allow sign in
       *                           Return `false` to deny access
       *                           Return `string` to redirect to (eg.: "/unauthorized")
       */
      async signIn(user, account, profile) {
        const isAllowedToSignIn = true
        if (isAllowedToSignIn) {
          return true
        } else {
          // Return false to display a default error message
          return false
          // Or you can return a URL to redirect to:
          // return '/unauthorized'
        }
      }
    }

}

export default (req: NextApiRequest, res: NextApiResponse):Promise<void> => NextAuth(req, res, options);