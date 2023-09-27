import Announcement from '@/components/Announcement '
import Offerheader from '@/components/Offerheader'
import React from 'react'
import Image from 'next/image'

function Offer() {
  return (
   <>
   <Offerheader />
   <section class="pt-10 bg-gray-100 sm:pt-16 lg:pt-2">
   
 <div class="container mx-auto 2xl:px-5">
        <Image class="w-full mt-2" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695465887/manufacturer/credit-cards1_j5bc7x.png" alt="" width={1920} height={1280}/>
    </div>
</section>

<Announcement />
</>

  )
}

export default Offer