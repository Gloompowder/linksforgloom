import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

export default function Contact() {
    const imageStyle = {
        width:'100%',
        height:'auto',
    };
    const [view, setView] = useState(false);

    function renderPast(){return view? 
    <>
         <div className="Eventspair">
        <a className = "trans-art-market" href="https://www.instagram.com/p/CxDdinWOW0_/" target="_blank" rel="noreferrer" alt="Trans ArtMarket">           
        <Image 
              className = "trans-art-market-flyer"
              src="/Trans Art Market Post.png"
              width='100'
              height='100'
              style={imageStyle}/></a>
            <div className ="event-description">
                <p>
                    Trans Art Market
                </p>
                <p>Vendor Popup</p>
                <a className = "gmap-link" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHFzZG12dnZzajdkdG9pc3VpYWwybG1rMmYgd2lsbGxpbjE5OTZAbQ&tmsrc=willlin1996%40gmail.com" target="_blank" rel="noreferrer" alt="Til Death link">
                <p>31 Ave 33rd St, Queens, NY</p>
                </a>
                <p>Sat Sep 7th 2023, 1pm - 6pm</p>
                <div className = "event-details"></div>
            </div>
        </div>
     <div className="Eventspair">
        <a className = "til-death-market" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHFzZG12dnZzajdkdG9pc3VpYWwybG1rMmYgd2lsbGxpbjE5OTZAbQ&tmsrc=willlin1996%40gmail.com" target="_blank" rel="noreferrer" alt="Til Death Market">           
        <Image 
              className = "til-death-flyer"
              src="/til-death.png"
              width='100'
              height='100'
              style={imageStyle}/></a>
            <div className ="event-description">
                <p>
                    Til Death Market
                </p>
                <p>Vendor Popup</p>
                <a className = "gmap-link" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHFzZG12dnZzajdkdG9pc3VpYWwybG1rMmYgd2lsbGxpbjE5OTZAbQ&tmsrc=willlin1996%40gmail.com" target="_blank" rel="noreferrer" alt="Til Death link">
                <p>603 Hart Street, Brooklyn, NY, 11221</p>
                </a>
                <p>Sat Aug 5, 8:30am - 4:00 PM</p>
                <div className = "event-details"></div>
            </div>
        </div>
    <div className="Eventspair">
    <a className = "pridefair-link" href="https://artsinbushwick.org/our-productions/bushwick-vendors-market/" target="_blank" rel="noreferrer" alt="Pride Fair Link">           
    <Image 
          className = "studio-gloom-flyer"
          src="/bushwickvendorsmarket.jpg"
          width='100'
          height='100'
          style={imageStyle}/></a>
                      <div className ="event-description">
            <p>
                Bushwick Vendor Market
            </p>
            <p>Art Fair</p>
            <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=M3Z1ZjJpaHNiaTRyNnZhb2tvY2Q2Y3Q0a2Egd2lsbGxpbjE5OTZAbQ&amp;tmsrc=willlin1996%40gmail.com" rel="noreferrer">
            <p>1444 Dekalb Avenue, Brooklyn, NY</p>
            <p>Sat July 8th, 1:00 PM - 5:00 PM</p>
            </a>
            <div className = "event-details"></div>
        </div>
    <a className = "lgbtcenter-link" href="https://transartbazaar.com/upcoming-bazaars" target="_blank" rel="noreferrer" alt="Trans Art Bazaar">           
    <Image 
          className = "studio-gloom-flyer"
          src="/transartbazaar.jpg"
          width='100'
          height='100'
          style={imageStyle}/></a>
        <div className ="event-description">
            <p>
                Trans Art Bazaar
            </p>
            <p>Vendor Popup</p>
            <a className = "gmap-link" href="https://transartbazaar.com/upcoming-bazaars" target="_blank" rel="noreferrer" alt="Trans Art Bazaar">
            <p>8 Wyckoff Ave Brooklyn, NY</p>
            </a>
            <p>Sun July 9th, 1:00 PM - 7:00 PM</p>
            <div className = "event-details"></div>
        </div>
    </div>
    <div className="Eventspair">
    <a className = "pridefair-link" href="https://www.elmfoundation.art/events-1/pride-fair" target="_blank" rel="noreferrer" alt="Pride Fair Link">           
    <Image 
          className = "studio-gloom-flyer"
          src="/pridefairlink.webp"
          width='100'
          height='100'
          style={imageStyle}/></a>
                      <div className ="event-description">
            <p>
                Pride Fair
            </p>
            <p>Vending and Raffle</p>
            <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=M3Z1ZjJpaHNiaTRyNnZhb2tvY2Q2Y3Q0a2Egd2lsbGxpbjE5OTZAbQ&amp;tmsrc=willlin1996%40gmail.com" rel="noreferrer" alt="Pride Fair Link">
            <p>Brooklyn, 191 N 14th St, Brooklyn, NY 11249, USA</p>
            <p>Jun 10, 12:00 PM – Jun 11, 6:00 PM</p>
            </a>
            <div className = "event-details"></div>
        </div>
    <a className = "lgbtcenter-link" href="https://gaycenter.org/trans-love/" target="_blank" rel="noreferrer" alt="Trans Love Pop Up Link">           
    <Image 
          className = "studio-gloom-flyer"
          src="/studio-gloom-flyer.png"
          width='100'
          height='100'
          style={imageStyle}/></a>
        <div className ="event-description">
            <p>
                Trans Love Pop Up
            </p>
            <p>First In-person Vendor/Grand Opening</p>
            <a className = "gmap-link" href="https://goo.gl/maps/R7WoZ1hHMKTsk9Tu9" target="_blank" rel="noreferrer" alt="Google Maps link to location">
            <p>208 W 13 St New York, NY 10011</p>
            </a>
            <p>Friday, March 31st, 2023 12pm-6pm EST</p>
            <div className = "event-details"></div>
        </div>
    </div></>:null};

    function innerHTML(){
        return view ? "Less": "More" 
    };

    return(
        <div className = "background">
    <div className = "card">
    <Image 
        className = "pfp"
        src="/gloomstudiologo.png"
        alt="@studiogloom logo"
        width={150}
        height={150}/>
  <h3>@studiogloom</h3>
        <div className = "Events-background">
        <div className = "Eventsdiv">
        <Link  href="/"><button className = "back-button">Back</button></Link>
        <Image 
              className = "October 2023"
              src="/StudioGloomOctober2023 Events.PNG"
              width='100'
              height='100'
              style={imageStyle}/>
        <Link  href="https://calendar.google.com/calendar/u/0?cid=OWFmMWEzODM4ZDk1YTc2OTFiYTM2NmM2ODc0NDA3ZGE0NTg5ZDQzYjJkN2U4ODhmZDk5OGZlNjJkOTE3ZWYxMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"><button className = "October-button" target="_blank" rel="noreferrer">October Events</button></Link>
        <h1>Upcoming Events</h1>
                <div className = "EventsDiv">
        <div className="Eventspair">
        <a className = "studio-gloom-october-events" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGpndTdyODZ2NG05ZDg1anVlanU3djRtbTQgOWFmMWEzODM4ZDk1YTc2OTFiYTM2NmM2ODc0NDA3ZGE0NTg5ZDQzYjJkN2U4ODhmZDk5OGZlNjJkOTE3ZWYxMEBn&tmsrc=9af1a3838d95a7691ba366c6874407da4589d43b2d7e888fd998fe62d917ef10%40group.calendar.google.com" target="_blank" rel="noreferrer" alt="Til Death Market">           
        <Image 
              className = "Shop-Update-Flyer"
              src="/Shopupdatebdaysale.png"
              width='100'
              height='100'
              style={imageStyle}/></a>
            <div className ="event-description-october">
                <p>
                    Autumn Shop Update Bday Sale
                </p>
                <p>Shop Update Bday Sale</p>
                <a className = "gmap-link-october" href="https://www.studiogloom.shop" target="_blank" rel="noreferrer" alt="Til Death link">
                <p>https://www.studiogloom.shop</p>
                </a>
                <p>Thur Oct 11 - Oct 18th</p>
                <div className = "event-details"></div>
            </div>
        </div>
        <div className="Eventspair">
        <a className = "pancakes and booze" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHFzZG12dnZzajdkdG9pc3VpYWwybG1rMmYgd2lsbGxpbjE5OTZAbQ&tmsrc=willlin1996%40gmail.com" target="_blank" rel="noreferrer" alt="Til Death Market">           
        <Image 
              className = "Pancakes and Booze Flyer"
              src="/PancakesandBooze.jpg"
              width='100'
              height='100'
              style={imageStyle}/></a>
            <div className ="event-description-october">
                <p>
                    Pancakes and Booze
                </p>
                <p>Art Gallery/Vendor Pop up</p>
                <a className = "gmap-link-october" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M3V2bWRyYmJhOWptNm42YmR0YzJlOTQ1a24gOWFmMWEzODM4ZDk1YTc2OTFiYTM2NmM2ODc0NDA3ZGE0NTg5ZDQzYjJkN2U4ODhmZDk5OGZlNjJkOTE3ZWYxMEBn&tmsrc=9af1a3838d95a7691ba366c6874407da4589d43b2d7e888fd998fe62d917ef10%40group.calendar.google.com" target="_blank" rel="noreferrer" alt="Pancakes and Booze Link">
                <p>270 Meserole Street, BK,NY</p>
                </a>
                <p>Sunday Oct 14, 7pm-9pm</p>
                <div className = "event-details"></div>
            </div>
        </div>
        <div className="Eventspair">
        <a className = "TONG Artist Popup" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGFvMXVscDR0bHFhNzNxZm40ZmdkMDE2OTIgOWFmMWEzODM4ZDk1YTc2OTFiYTM2NmM2ODc0NDA3ZGE0NTg5ZDQzYjJkN2U4ODhmZDk5OGZlNjJkOTE3ZWYxMEBn&tmsrc=9af1a3838d95a7691ba366c6874407da4589d43b2d7e888fd998fe62d917ef10%40group.calendar.google.com" target="_blank" rel="noreferrer" alt="Til Death Market">           
        <Image 
              className = "TONG Artist Popup pic"
              src="/Tong artist popup.webp"
              width='100'
              height='100'
              style={imageStyle}/></a>
            <div className ="event-description-october">
                <p>
                    TONG Artist Popup
                </p>
                <p>Vendor Popup</p>
                <a className = "gmap-link-october" href="https://partiful.com/e/d26BDnMpij8d7CrvMnA1" target="_blank" rel="noreferrer" alt="TONG Artist Popup Link">
                <p>321 Starr St. BK NY</p>
                </a>
                <p>Sunday Oct 15, 11am-7pm</p>
                <div className = "event-details"></div>
            </div>
        </div>
        <div className="Eventspair">
        <a className = "Artists4Artists" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NjB1cGJzZHBsdWc1dHRjczgzb2VrZ3ZpaHYgOWFmMWEzODM4ZDk1YTc2OTFiYTM2NmM2ODc0NDA3ZGE0NTg5ZDQzYjJkN2U4ODhmZDk5OGZlNjJkOTE3ZWYxMEBn&tmsrc=9af1a3838d95a7691ba366c6874407da4589d43b2d7e888fd998fe62d917ef10%40group.calendar.google.com" target="_blank" rel="noreferrer" alt="TONG Artist Popup">           
        <Image 
              className = "Artists4Artists"
              src="/Artists4Artists.png"
              width='100'
              height='100'
              style={imageStyle}/></a>
            <div className ="event-description-october">
                <p>
                    Artists4Artists
                </p>
                <p>Swap Meet</p>
                <a className = "gmap-link-october" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NjB1cGJzZHBsdWc1dHRjczgzb2VrZ3ZpaHYgOWFmMWEzODM4ZDk1YTc2OTFiYTM2NmM2ODc0NDA3ZGE0NTg5ZDQzYjJkN2U4ODhmZDk5OGZlNjJkOTE3ZWYxMEBn&tmsrc=9af1a3838d95a7691ba366c6874407da4589d43b2d7e888fd998fe62d917ef10%40group.calendar.google.com" target="_blank" rel="noreferrer" alt="TONG Artist Popup Link">
                <p>Washington Sq. Park</p>
                </a>
                <p>Saturday Oct 21, 2pm-3pm</p>
                <div className = "event-details"></div>
            </div>
        </div>
        <div className="Eventspair">
        <a className = "Trans Art Boo-zar" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWlsaWxpNzRwaDcwbWJ0b2Q4OXA1ZDVtbDQgOWFmMWEzODM4ZDk1YTc2OTFiYTM2NmM2ODc0NDA3ZGE0NTg5ZDQzYjJkN2U4ODhmZDk5OGZlNjJkOTE3ZWYxMEBn&tmsrc=9af1a3838d95a7691ba366c6874407da4589d43b2d7e888fd998fe62d917ef10%40group.calendar.google.com" target="_blank" rel="noreferrer" alt="TONG Artist Popup">           
        <Image 
              className = "Trans Art Boo-zar"
              src="/transartboozar.png"
              width='100'
              height='100'
              style={imageStyle}/></a>
            <div className ="event-description-october">
                <p>
                    Trans Art Boozar
                </p>
                <p>Trans Art Market</p>
                <a className = "gmap-link-october" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWlsaWxpNzRwaDcwbWJ0b2Q4OXA1ZDVtbDQgOWFmMWEzODM4ZDk1YTc2OTFiYTM2NmM2ODc0NDA3ZGE0NTg5ZDQzYjJkN2U4ODhmZDk5OGZlNjJkOTE3ZWYxMEBn&tmsrc=9af1a3838d95a7691ba366c6874407da4589d43b2d7e888fd998fe62d917ef10%40group.calendar.google.com" target="_blank" rel="noreferrer" alt="TONG Artist Popup Link">
                <p>2 Wyckoff Avenue, BK, NY</p>
                </a>
                <p>Sunday Oct 22, 1pm-7pm</p>
                <div className = "event-details"></div>
            </div>
        </div>
        <h1>Past Events</h1>
        {renderPast()}
        </div>
        </div>
        <button className = "view-button" onClick={() => 
            view == false ? setView(true) : setView(false)}>{innerHTML()}
            </button>
        </div>
        </div>
        </div>
    )
}
        {/* <h4>no upcoming events</h4> */}
        {/* <div className="Eventspair">
<a className = "lgbtcenter-link" href="https://gaycenter.org/trans-love/" target="_blank" rel="norefferer">
        <Image 
        width="100"
        height="100"
objectFit='contain'
alt='under construction'
              src="/under_construction.png"
              style={imageStyle}/>
                      </a>
            <div className ="event-description">
                <p>
                    Online Grand Opening
                </p>
                <p>https://www.studiogloom.com</p>
                <p>Saturday, April 8th, 12am EST</p>
                <p></p>
                <div className = "event-details">
                    <p className="setting"></p>
                    <p className="time"></p>
                </div>
            </div>
        </div> */}