import Image from "next/image"
import iphone from "@/app/assets/iphone.png"
import PS  from "@/app/assets/PS.png"
import handfree from "@/app/assets/handfree.png"
import vision from "@/app/assets/vision.png"
import macbook from "@/app/assets/macbook.png"
import { IoIosArrowForward } from "react-icons/io";
import mactwo from "@/app/assets/mactwo.png"
import handsfreetwo from "@/app/assets/handsfreetwo.png"
import visiontwo from "@/app/assets/visiontwo.png"
import { IoIosArrowBack } from "react-icons/io";
import Computers from "@/app/assets/Computers.png"
import Headphones from "@/app/assets/Headphones.png"
import Phones from "@/app/assets/Phones.png"
import Gaming from "@/app/assets/Gaming.png"
import watch from "@/app/assets/watch.png"
import Cameras from "@/app/assets/Cameras.png"
import cardphone from "@/app/assets/cardphone.png"
import cardcamera from "@/app/assets/cardcamera.png"
import cardwatch from "@/app/assets/cardwatch.png"
import galaxyimage from "@/app/assets/galaxyimage.png"
import ipad from "@/app/assets/ipad.png"
import galaxyphone from "@/app/assets/galaxyphone.png"
import cardairdots from "@/app/assets/cardairdots.png"
import cardhandsfree from "@/app/assets/cardhandsfree.png"
import subone from "@/app/assets/subone.png"
import subtwo from "@/app/assets/subtwo.png"
import subthree from "@/app/assets/subthree.png"
import subfour from "@/app/assets/subfour.png"
import bannertwo from "@/app/assets/bannertwo.png"
import iphone15 from "@/app/assets/iphone15.png"
import iphone10 from "@/app/assets/iphone10.png"
import Card from "@/app/components/Cards/Card"
import SecondCard from "@/app/components/SecondCard/SecondCard"



const page = () => (
  <>
  <div>

<div className="first-container flex justify-center gap-24">


<div className="first-sub-container flex justify-center items-center" >
<div className="info">
<h6>Pro.Beyond.</h6>
<h1>I Phone 14 <span>Pro</span></h1>
<p>Created to change everything for the better. For everyone</p>
<button className="btn-border">Shop Now</button>
</div>
</div>

<div className="second-sub-container flex justify-center items-center overflow-hidden">
<Image src={iphone} className='iphone' alt="Picture of the iPhone"/>
  
</div>
</div>


{/* second main section  */}


<div className="flex  most-main flex-wrap">

<div className="sub-container ">

<div className="sub-one-container flex justify-start ">

<div className="station-container flex justify-end items-end"><Image src={PS} className="play-station" alt="Picture of the play-station"/></div>
<div className="station-detail mt-20 gap">

<h1>Playstation 5</h1>
<p>Incredibly powerful CPUs, GPUs,  and an SSD with integrated I/O will redefine your PlayStation experience</p>

</div>
</div>

 
<div className="sub-two-container flex">

<div className="sub-two-one flex grey">

<div className="station-container"><Image src={handfree} className="handfree" alt="Picture of the handfree"/></div>
<div className="station-container"><Image src={handsfreetwo} className="handfree-2" alt="Picture of the handsfreetwo"/></div>
<div className="free-detail flex justify-center flex-col items-start">

<h1 className="yes">Apple Airpods <span>Max</span></h1>



<h1 className="no">Apple Airpods <span>Max</span></h1>
<p>Computational audio. Listen, its powerful</p>

</div>
</div>
<div className="sub-two-one flex vision-color">

<div className="vision-container flex justify-centera items-center "><Image src={vision} className="vision" alt="Picture of the vision"/></div>
<div className="station-container vision-pack"><Image src={visiontwo} className="vision-2" alt="Picture of the vision-2"/></div>

<div className="free-detail flex justify-center flex-col items-start">

<h1 className="text-white yes">Apple Vision  <span>Pro</span></h1>
<p>An immersive way to experience entertainment</p>

</div>
</div>

</div>

</div>
<div className="sub-container-two-main flex ">
<div className="sub-one-main-two flex justify-center items-center ">
<div className="free-detail flex justify-center flex-col items-start p-40">

<h1>Macbook <span>Air</span></h1>
<p>The new 15‑inch MacBook Air makes  room for more of what you love with a  spacious Liquid Retina display.</p>
<div className="shop-btn"><button>Shop Now</button></div>

</div>
</div>

<div className="sub-two-main-two flex justify-center items-center">
    
  <div className="flex  items-center">
    <Image src={macbook} className="mac" alt="Picture of the macbook"/>
    
    <Image src={mactwo} className="mac-2"alt="Picture of the mactwo" />
  </div>

</div>
</div>
</div>


{/* second section start  */}


<div className="flex items-center flex-col justify-between head-third-main">

<div className="flex justify-between items-center w-[100%] browse-container p-0 mt-5">

<h1 className="text-3xl browse">Browse By Category</h1>
<div className="flex gap-10 justify-center items-center"><IoIosArrowBack className="text-3xl browse-icon" />   <IoIosArrowForward className="text-3xl browse-icon"  /> </div>


</div>

<div className="product-third-container flex  justify-between flex-wrap  ">

<div className="p-container flex flex-col items-center justify-center gap-5 hover choota-card "><Image src={Phones} alt="Picture of the Phones"/>  <h1 className="text-2xl ">Phones</h1></div>
<div className="p-container flex flex-col items-center justify-center gap-5 hover choota-card"><Image src={Headphones} alt="Picture of the Headphones"/>  <h1 className="text-2xl ">HeadPhones</h1></div>
<div className="p-container flex flex-col items-center justify-center gap-5 hover choota-card"><Image src={Gaming} alt="Picture of the Gaming"/>  <h1 className="text-2xl ">Gaming</h1></div>
<div className="p-container flex flex-col items-center justify-center gap-5 hover choota-card"><Image src={watch} alt="Picture of the watch"/>  <h1 className="text-2xl ">Watch</h1></div>
<div className="p-container flex flex-col items-center justify-center gap-5 hover choota-card"><Image src={Computers} alt="Picture of the Computers"/>  <h1 className="text-2xl ">Computers</h1></div>
<div className="p-container flex flex-col items-center justify-center gap-5 hover choota-card"><Image src={Cameras} alt="Picture of the Camera"/>  <h1 className="text-2xl ">Gaming</h1></div>


</div>


<div className="second-head gap-10 flex justify-start items-center w-[100%] mt-14 bg-white  border-black">


<button className="for-underline"><h1 className='text-3xl'>New Arrival</h1></button>
<h1 className='text-2xl'>Bestseller</h1>
<h1  className='text-2xl'>Featured Products</h1>
</div>


<div className="main-one-card-container be-set w-[100%] mt-16 flex flex-wrap justify-between">

<Card pic={cardphone} title="I PHONE 41mm Starlight Aluminium" price="$999"/>

<Card pic={cardcamera} title="Blackmagic Pocket Cinema  Camera 6k " price="$2535"/>

<Card pic={cardwatch} title="Apple Watch Series 9 GPS 41mm Starlight Aluminium  " price="$399"/>

<Card pic={cardhandsfree} title="AirPods Max Silver Starlight Aluminium " price="$549"/>

</div>



<div className="main-one-card-container w-[100%] be-set flex flex-wrap justify-between mt-10">

<Card pic={cardairdots} title="Galaxy Buds FE Graphite 41mm Starlight Aluminium " price="$99.99"/>

<Card pic={galaxyimage} title="Samsung Galaxy Watch6 Classic 47mm Black " price="$369"/>

<Card pic={galaxyphone} title="Galaxy Z Fold5 Unlocked | 256GB | Phantom Black" price="$1799"/>
<Card pic={ipad} title="Apple iPad 9 10.2 64GB Wi-Fi  Silver (MK2L3) 2021" price="$398"/>








</div>
</div>



<div className="second-main-card-container mt-16   ">

<SecondCard title="Popular Products" pic={subone}  />

<SecondCard title="Ipad Pro" pic={subtwo} bgColor="#F9F9F9"/>

<SecondCard title="Samsung Galaxy" pic={subthree} bgColor="#EAEAEA"/>

<SecondCard title="Macbook Pro" pic={subfour} bgColor="#2C2C2C" Color="#FFFFFF" btncolor="#FFFFFF" btnborder="1px solid #FFFFFF"/>


</div>



<div className="main-one-card-container w-[100%] mt-16 gap-24 neechy flex flex-wrap justify-center items-center">

<Card pic={iphone15}  title="Apple iPhone 14 Pro 512GB Gold (MQ233) " price="$1437"/>

<Card pic={iphone10} title="Apple iPhone 14 Pro 1TB Gold (MQ2V3) " price="$1499"/>

<Card pic={cardwatch} title="Apple Watch Series 9 GPS 41mm Starlight Aluminium  " price="$399"/>

<Card pic={cardhandsfree} title="AirPods Max Silver Starlight Aluminium " price="$549"/>

</div>

<div className="bacground-image-container">


  <Image
      src={bannertwo} className='banner'
      alt="Picture of the banner"
    />
</div>
  </div>
  

  </>
)

export default page


