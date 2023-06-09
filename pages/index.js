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
      <div className='text-blue-900 flex justify-between m-2'>

        <h2>Hello {session?.user?.name}</h2>
        
        <div className='flex bg-gray-300 gap-1 rounded-lg'>
        
          <img src={session.user.image} className="w-6 h-6"/>
          <span className='px-2'>{session?.user?.name}</span>
        </div>
        

      </div>
    </Layout>

)
    

  
}
