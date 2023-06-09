import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from '@/Components/Nav/nav';
import Layout from '@/Components/layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {data:session}=useSession();

  
return (

  <Layout>
      <div className='text-blue-900'>

        Hello {session?.user?.name}

        <img src={session.user.image}></img>

      </div>
    </Layout>

)
    

  
}
