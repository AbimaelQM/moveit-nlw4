import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>

    <div>
      {!session && <>
        Not signed in <br />
        <button onClick={
          async () => signIn('github')}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}>Sign out</button>
      </>}
    </div>
  </>
}

