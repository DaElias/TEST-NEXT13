import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'


async function getData(id = "")
{
    console.log(id)
    // const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: "no-store" })
    const res = await fetch(`${process.env.URL}/api/posts/${id}`, { method: "GET", cache: "no-store" })
    if (!res.ok)
        return notFound()
    return res.json()
}

const BlogPosId = async ({ params }) =>
{
    const { id } = params
    const item = await getData(id)
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <p className={styles.desc}>{item.desc}</p>
                    <div className={styles.username}>
                        <Image
                            alt=''
                            src='https://images.pexels.com/users/avatars/3876357/damir-570.jpeg?auto=compress&fit=crop&h=40&w=40&dpr=2'
                            height={40}
                            width={40}
                            className={styles.avatar}
                        />
                        <h3>Jhon Does Lass</h3>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        alt=''
                        src={item.img}
                        fill={true}
                        className={styles.img}
                    />
                </div>
            </div>
            <p className={styles.desc}>{item.content}</p>
        </div>
    )
}

export default BlogPosId