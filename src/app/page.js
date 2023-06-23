import Image from 'next/image'
import styles from './page.module.css'
import imageHome from "public/content/1.jpg"



export default function Home()
{
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Velit fugiat reprehenderit sit laborum.</h1>
        <p className={styles.desc}>
          Ullamco occaecat nostrud velit ex aliqua ex esse ea nostrud. Enim laboris commodo ea do incididunt aliqua culpa adipisicing. Do voluptate anim aliqua ea fugiat voluptate do do cillum occaecat adipisicing et magna.
        </p>
        <button className={styles.bottom}>See our works</button>
      </div>
      <div className={styles.item}>
        <Image src={imageHome} width={500} height={500} alt='first image' className={styles.img} />
      </div>
    </main>
  )
}
