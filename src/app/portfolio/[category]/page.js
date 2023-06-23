import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


const LIST_ITEMS = [
    {
        id: 1,
        title: 'Laborum dolor',
        desc: ' Ad amet labore magna adipisicing in est ea ex velit Lorem esse. Duis duis velit velit veniam consectetur aute aute cupidatat eiusmod aute dolore deserunt. Culpa eu incididunt sit quis sunt laborum dolor excepteur. Enim cillum esse mollit qui pariatur eiusmod incididunt minim labore est magna dolore. Minim commodo ex Lorem id.',
        url_img: 'https://images.pexels.com/photos/15031202/pexels-photo-15031202/free-photo-of-canoe-on-lake-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 2,
        title: 'Laborum dolor2',
        desc: ' Ad amet labore magna adipisicing in est ea ex velit Lorem esse. Duis duis velit velit veniam consectetur aute aute cupidatat eiusmod aute dolore deserunt. Culpa eu incididunt sit quis sunt laborum dolor excepteur. Enim cillum esse mollit qui pariatur eiusmod incididunt minim labore est magna dolore. Minim commodo ex Lorem id.',
        url_img: 'https://images.pexels.com/photos/12557515/pexels-photo-12557515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 3,
        title: 'Laborum dolor3',
        desc: ' Ad amet labore magna adipisicing in est ea ex velit Lorem esse. Duis duis velit velit veniam consectetur aute aute cupidatat eiusmod aute dolore deserunt. Culpa eu incididunt sit quis sunt laborum dolor excepteur. Enim cillum esse mollit qui pariatur eiusmod incididunt minim labore est magna dolore. Minim commodo ex Lorem id.',
        url_img: 'https://images.pexels.com/photos/14801446/pexels-photo-14801446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
]


const Category = ({ params }) =>
{
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}> {params.category}</h1>
            {
                LIST_ITEMS.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>
                                {item.desc}
                            </p>
                            <Button text="See Mores" />
                        </div>
                        <div className={styles.imgContainer}>
                            <Image
                                className={styles.img}
                                fill={true}
                                alt={item.title}
                                src={item.url_img} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Category