import React from 'react'
import Image from 'next/image'

function Brand() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-1.png" alt="" width={1920} height={1280} />
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-2.png" alt="" width={1920} height={1280} />
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png" alt="" width={1920} height={1280} />
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-4.png" alt="" width={1920} height={1280} />
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-5.png" alt="" width={1920} height={1280} />
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-6.png" alt="" width={1920} height={1280} />
            </div>
        </div>
    </div>
</section>

  )
}

export default Brand