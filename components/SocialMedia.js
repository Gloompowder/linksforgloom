import Image from 'next/image'
import Link from 'next/link'
export default function SocialMedia(){
    return(
        <div className ="socialmedia">
            <Link                   href='https://instagram.com/studiogloom/' target='_blank' rel="noreferrer">
                  <Image 
                  src="/instagram.svg"
                  alt="instagram icon"
                  width={50}
                  height={50}/>
            </Link> 
            <Link                  href='https://studiogloom.shop' target='_blank' rel="noreferrer">

                        <Image 
                        src="/basket-shop.png"
                        alt="shop icon"
                        width={50}
                        height={50}
                        />
            </Link>
            <Link                   href='https://studiogloom.shop' target='_blank' rel="noreferrer">
                        <Image 
                        src="/tik-tok.png"
                        alt="tik tok icon"
                        width={50}
                        height={50}
                        href='https://tiktok.com/@studiogloom/' target='_blank' rel="noreferrer"/>  
                  {/* </a> */}
            </Link>
                      
        </div>
    )
}