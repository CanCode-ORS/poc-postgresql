import React, {useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
//components
import SidePicture from '@/components/menus/SidePicture'
// import {useSession, signIn, signOut} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/userContext';

export default function Login() {

    const [email, setEmail] = useState('');
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [user, setUser] = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      return;
    }

    try {
      const resp = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email})
      })
      const data = await resp.json();
      console.log('DATA:', data.user);

      if (data.user) {
        setUser(data.user);
        router.push('/teams');
      }
      // router.push('/teams');
      
      
    } catch (error) {
      console.error(error.message);
    }

  }

  return (
    <>
      <Head>
        <title>Podium | Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class='flex'>

        <div class={styles.container}>
          <div class={styles.containerInner}>

              <div class={styles.header}>
              <h1 class="text-[2.2rem] font-semibold">Welcome to Podium!</h1>
              <p class='text-[1.2rem]'>Sign in below or <a href='/signup' class='cursor-pointer font-bold underline'>Sign Up</a></p>
              </div>

                <div class=''>
                  <p class='py-3 text-[1.36rem] font-medium'>Sign In</p>
                  <input class='w-full mb-3' type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                  <input class='w-full' type='password' value={password} onChange={(e) => setPassword(e.target.value)} maxLength="8" placeholder='Password'/>
                    <div class='flex items-center p-2 gap-1'>
                      <input class='my-2' id='remember' type='checkbox' /><br/>
                      <label for='remember'>Remember me</label>
                    </div>
                  <button onClick={handleSubmit} class='p-[10px] w-full bg-black text-white rounded-sm'>Sign In</button>
                    <p class='py-3 text-right cursor-pointer'>Forgot your password?</p>
                </div>

                <div class='flex flex-col gap-[13px] text-center'>
                  <p>Or</p>
                  <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 justify-center">
                  <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                  Sign in with Google
                </button>
                
                <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 justify-center">
                <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                Sign in with Facebook
              </button>

                </div>
          </div>
        </div>
      
        <SidePicture image='https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1194.jpg?w=1380&t=st=1675121820~exp=1675122420~hmac=45c9eb84452caed580344f5536705dcdabc9848e820707a5bf1385d8cc5e5b99' />
      
      </main>
    </>
  )
}
