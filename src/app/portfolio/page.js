import React from 'react'
import Link from 'next/link'
import style from "./page.module.css"
import Image from 'next/image'


export const metadata = {
    title: "Lamamia - Portfolio",
    description: "cillum veniam duis consectetur consectetur anim veniam pariatur cupidatat. Enim elit enim laborum esse cillum tempor fugiat aute veniam. Occaecat qui enim eu amet id eiusmod ut labore aute.",
};

const LIST_CATEGORIES = [
    {
        url: '/portfolio/webside', title: 'Webside'
        , img_url: 'https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        url: '/portfolio/illustrations', title: 'Illustrations'
        , img_url: 'https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        url: '/portfolio/applications', title: 'Applications'
        , img_url: 'https://images.pexels.com/photos/3692887/pexels-photo-3692887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
]


const Portfolio = () =>
{
    return (
        <div className={style.container}>
            <h1 className={style.selectTitle}>Choose a gallery</h1>
            <div className={style.items}>
                {LIST_CATEGORIES.map((item, index) => (
                    <Link className={style.item} href={item.url} key={index} >
                        <Image alt='' fill src={item.img_url} className={style.img} />
                        <spam className={style.title}>{item.title}</spam>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Portfolio