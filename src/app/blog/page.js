import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation"


export const metadata = {
  title: "Lamamia - Blogs",
  description: "cillum veniam duis consectetur consectetur anim veniam pariatur cupidatat. Enim elit enim laborum esse cillum tempor fugiat aute veniam. Occaecat qui enim eu amet id eiusmod ut labore aute.",
};

async function getData()
{
  const res = await fetch(`${process.env.URL}/api/posts`, { method: 'GET', cache: "no-store" })
  console.log(process.env.URL)
  // const res = await fetch(`https://fakestoreapi.com/products`, { cache: "no-store" })
  if (!res.ok)
    return notFound()
  return res.json()
}

const Blog = async () =>
{
  const listBlogs = await getData()
  return <div className={styles.mainContainer}>
    {
      listBlogs.map(
        item => (
          <Link href={`/blog/${item._id + ''}`} key={item.id} className={styles.item}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                fill={true}
                alt={item.title}
                src={item.img} />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>
                {item.desc}
              </p>
            </div>
          </Link>
        )
      )
    }

  </div>;
};

export default Blog;



// const LIST_BLOGS = [
//   {
//     id: 1,
//     title: 'Aerial View of Road Between Green Grass Field',
//     descrition: 'Aute et tempor non non officia incididunt dolore pariatur enim. Dolore tempor ad commodo minim. Excepteur laborum incididunt est dolore do aute laborum veniam ut tempor laboris. Aliquip deserunt mollit fugiat anim magna. Aliquip dolor mollit esse dolor dolor cillum duis dolor. Incididunt est aute velit ut ipsum tempor labore magna magna ullamco irure. Consequat aliqua laborum veniam amet fugiat voluptate cupidatat.',
//     url_img: 'https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     id: 2,
//     title: 'White Vehicle Parked Beside Road',
//     descrition: 'Aute et tempor non non officia incididunt dolore pariatur enim. Dolore tempor ad commodo minim. Excepteur laborum incididunt est dolore do aute laborum veniam ut tempor laboris. Aliquip deserunt mollit fugiat anim magna. Aliquip dolor mollit esse dolor dolor cillum duis dolor. Incididunt est aute velit ut ipsum tempor labore magna magna ullamco irure. Consequat aliqua laborum veniam amet fugiat voluptate cupidatat.',
//     url_img: 'https://images.pexels.com/photos/2994133/pexels-photo-2994133.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
//   },
//   {
//     id: 3,
//     title: 'White Car Parked on Road Near Trees',
//     descrition: 'Aute et tempor non non officia incididunt dolore pariatur enim. Dolore tempor ad commodo minim. Excepteur laborum incididunt est dolore do aute laborum veniam ut tempor laboris. Aliquip deserunt mollit fugiat anim magna. Aliquip dolor mollit esse dolor dolor cillum duis dolor. Incididunt est aute velit ut ipsum tempor labore magna magna ullamco irure. Consequat aliqua laborum veniam amet fugiat voluptate cupidatat.',
//     url_img: 'https://images.pexels.com/photos/4062200/pexels-photo-4062200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     id: 4,
//     title: 'White Car Parked on Road Near Trees',
//     descrition: 'Aute et tempor non non officia incididunt dolore pariatur enim. Dolore tempor ad commodo minim. Excepteur laborum incididunt est dolore do aute laborum veniam ut tempor laboris. Aliquip deserunt mollit fugiat anim magna. Aliquip dolor mollit esse dolor dolor cillum duis dolor. Incididunt est aute velit ut ipsum tempor labore magna magna ullamco irure. Consequat aliqua laborum veniam amet fugiat voluptate cupidatat.',
//     url_img: 'https://images.pexels.com/photos/4062200/pexels-photo-4062200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     id: 5,
//     title: 'White Car Parked on Road Near Trees',
//     descrition: 'Aute et tempor non non officia incididunt dolore pariatur enim. Dolore tempor ad commodo minim. Excepteur laborum incididunt est dolore do aute laborum veniam ut tempor laboris. Aliquip deserunt mollit fugiat anim magna. Aliquip dolor mollit esse dolor dolor cillum duis dolor. Incididunt est aute velit ut ipsum tempor labore magna magna ullamco irure. Consequat aliqua laborum veniam amet fugiat voluptate cupidatat.',
//     url_img: 'https://images.pexels.com/photos/4062200/pexels-photo-4062200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     id: 6,
//     title: 'White Car Parked on Road Near Trees',
//     descrition: 'Aute et tempor non non officia incididunt dolore pariatur enim. Dolore tempor ad commodo minim. Excepteur laborum incididunt est dolore do aute laborum veniam ut tempor laboris. Aliquip deserunt mollit fugiat anim magna. Aliquip dolor mollit esse dolor dolor cillum duis dolor. Incididunt est aute velit ut ipsum tempor labore magna magna ullamco irure. Consequat aliqua laborum veniam amet fugiat voluptate cupidatat.',
//     url_img: 'https://images.pexels.com/photos/4062200/pexels-photo-4062200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   }
// ]
