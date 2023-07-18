import Image from 'next/image'
export default function SocialMedia(){
    return(
        <div className ="socialmedia">
        <Image 
            target="https://www.instagram.com/studiogloom/"
              src="/instagram.svg"
              alt="instagram icon"
              width={50}
              height={50}/>  
                                    <Image 
              src="/redbubble.svg"
              alt="redbubble icon"
              width={50}
              height={50}/>
        <Image 
              src="/redbubble.svg"
              alt="redbubble icon"
              width={50}
              height={50}/>
        </div>
    )
}