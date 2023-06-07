import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from '@/Components/Nav/nav';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session } = useSession();

  console.log(session);

  if(!session) {
   
      return (
        <>

          <div className={'bg-blue-900 w-screen h-screen flex items-center'}>

            <div className={'text-center w-full'}>
              <button  onClick={()=>signIn('google')} className={'bg-white p-2 px-4 rounded-md'}>Login with Google</button>
            </div>

          </div>
      </>
  );
  
  }
  return (
    <div className={'bg-blue-900 min-h-screen'}>
    <Nav/>
      logged in {session?.user.email}
    </div>
  )

  
}
