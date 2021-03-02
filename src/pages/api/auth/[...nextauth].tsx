import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


const options = {
    // Configure one or more authentication providers
    providers: [
      Providers.GitHub({
        clientId: "b1974ed3a5f31e6c366b",
        clientSecret: "4e5fe5fb4708d10216cf8c6f6cf3299c61d0b00c",
        // redirectUri: 
        // process.env.GITHUB_SECRET
      }),
      // ...add more providers here
    ],
  
    // A database is optional, but required to persist accounts in a database
    database: process.env.NEXTAUTH_URL,
    
}

export default (req: NextApiRequest, res: NextApiResponse):Promise<void> => NextAuth(req, res, options);