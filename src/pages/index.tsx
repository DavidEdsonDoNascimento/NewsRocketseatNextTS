import Head from 'next/head';
import Image from 'next/image';
import avatar from '@imgs/avatar.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main>
        <section>
          <span>
            👏 Hey, welcome!
          </span>
          <h1>
            News about the <span>React</span> World.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>
        <Image
          src={avatar}
          alt="Girl coding"
        />
      </main>
    </>
  )
}
