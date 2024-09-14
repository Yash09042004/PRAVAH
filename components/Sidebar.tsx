'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {cn} from '@/lib/utils'
import { sidebarLinks } from '@/constants'
import  {usePathname} from 'next/navigation'


const Sidebar = ({user}:SiderbarProps) => {
    const pathname  = usePathname();
  return (
    <section className='sidebar'>
    <nav className='flex flex-col gap-4'>
        <Link href='/' className='mb-14  flex ursor-pointer items-center gap-2'>
            <Image 
                src="/icons/logo.svg"
                width={40}
                height={40}
                alt="Pravah"
                className='size-[24px] max-xl:size-30'
            />
            <h1 className='sidebar-logo'>
                Pravah
            </h1>
        </Link> {/* Closing tag for Link */}
        {sidebarLinks.map((item) =>{
            const isActive = 
            pathname === item.
            route ||  pathname.startsWith('${item.route}/')
            return(
                <Link href={item.route} key={item.label}
                className={cn
                    ('sidebar-link',{
                        'bg-bank-gradient':isActive
                    }
                    )}
                >
                <div className='relative size-6'>
                    <Image 
                        src={item.imgURL}
                        alt = {item.label}
                        fill
                        className={cn({
                            'brightness-[3] invert-0':isActive
                        })}
                    />
                </div>
                <p className={cn(
                    'sidebar-label',{
                        '!text-white':isActive
                    }
                 )}>
                    {item.label}
                </p>
                </Link>
            )
        })}
        USER

    </nav>

        FOOTER
</section>
)
}

export default Sidebar