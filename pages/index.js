import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import SocialMedia from '../components/SocialMedia'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gloompowder Links</title>
        <meta name="description" content="Gloompowder's Links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className = 'scroll-left'>
            <p><Link href="https://instagram.com/studiogloom/" target='_balnk' rel="noreferrer">DM/contact</Link> for Commissions, Design, Coding </p>
        </div>
        <div className = "background">
          <div className = "card">
        <Image 
              className = "pfp"
              src="/gloomstudiologo.png"
              alt="@studiogloom logo"
              width={150}
              height={150}/>
        <h3>@gloompowder</h3>
        <SocialMedia />
        <div className ="links">
        <a href="events" target = "_self" >
            events
          </a>
          <a href="https://www.studiogloom.shop/" target="_blank" rel="noreferrer">
            online shop
          </a>
          {/* <a href="https://www.instagram.com/studiogloom/" className='commissions' target="_blank" rel="noreferrer">
            commissions
          </a> */}
          {/* <a href="https://willlin1996.wixsite.com/portfolio" target="_blank" rel="noreferrer">
            graphic design
          </a> */}
          <a href="https://gloompowder.github.io" target="_blank" rel="noreferrer">
            software development
          </a>
          <a href="contact" target = "_self" >
            contact
          </a>
          <Link  className= "ko-fi-link" href='https://ko-fi.com/Q5Q2NCC87' target='_blank' rel="noreferrer"> 
          tip
</Link>           
</div>
        </div>
        </div>
      </main>
    </>
  )
}
