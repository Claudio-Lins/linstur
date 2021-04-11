import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home({ post }) {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-black bg-cover bg-center"
        style={{
          'background-image':
            'linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 0%)), url(/home/rio-tejo.jpeg)',
        }}
      >
        <Head>
          <title>LinsTur - Viajar é preciso.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex items-center justify-center md:px-40 md:py-16 text-center rounded-lg">
          {/* <div className="md:grid lg:grid-cols-3 container px-4 mx-auto space-x-6"> */}
          <div className=" hidden p-4 md:flex space-x-4 md:w-2/3">
            {post &&
              post.slice(0, 3).map((post) => (
                <div>
                  <Link href={`/${post.Slug}`} key={post.id}>
                    <a>
                      <div className="flex max-w-xl bg-white shadow-lg border rounded-lg overflow-hidden">
                        <div className="flex items-center w-full">
                          <div className="w-full">
                            <div className="" />
                            <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                              <Image
                                src={post.Cover.url}
                                alt="Blog - Rede Sem Fronteiras"
                                layout="responsive"
                                width={post.Cover.width}
                                height={post.Cover.height}
                                objectFit="cover"
                              />
                            </div>
                            <div className="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2">
                              {post.Title}
                            </div>
                            <div className="text-gray-500 font-thin text-sm mb-6 mx-3 px-2">
                              {post.Resume}
                            </div>

                            <div className="flex justify-between border-t border-gray-100">
                              <div className="mt-3 mx-5 w-full flex justify-start">
                                <div className="flex text-gray-700 font-normal text-[10px] rounded-md mb-2 mr-4 items-center">
                                  Author:
                                  <div className="ml-1 text-gray-400 font-thin text-ms">
                                    {post.author.Name}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3 mx-5 w-full flex justify-end">
                                <div className="flex text-gray-700 font-normal text-[10px] rounded-md mb-2 mr-4 items-center">
                                  Categories:
                                  <div className="ml-1 text-gray-400 font-thin text-ms">
                                    {post.category.Name}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
          </div>
                {/* Mobile */}

                <div className="p-4 md:hidden">
            {post &&
              post.slice(0, 1).map((post) => (
                <div>
                  <Link href={`/${post.Slug}`} key={post.id}>
                    <a>
                      <div className="flex max-w-xl bg-white shadow-lg border rounded-lg overflow-hidden">
                        <div className="flex items-center w-full">
                          <div className="w-full">
                            <div className="" />
                            <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                              <Image
                                src={post.Cover.url}
                                alt="Blog - Rede Sem Fronteiras"
                                layout="responsive"
                                width={post.Cover.width}
                                height={post.Cover.height}
                                objectFit="cover"
                              />
                            </div>
                            <div className="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2">
                              {post.Title}
                            </div>
                            <div className="text-gray-500 font-thin text-sm mb-6 mx-3 px-2">
                              {post.Resume}
                            </div>

                            <div className="flex justify-between border-t border-gray-100">
                              <div className="mt-3 mx-5 w-full flex justify-start">
                                <div className="flex text-gray-700 font-normal text-[10px] rounded-md mb-2 mr-4 items-center">
                                  Author:
                                  <div className="ml-1 text-gray-400 font-thin text-ms">
                                    {post.author.Name}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3 mx-5 w-full flex justify-end">
                                <div className="flex text-gray-700 font-normal text-[10px] rounded-md mb-2 mr-4 items-center">
                                  Categories:
                                  <div className="ml-1 text-gray-400 font-thin text-ms">
                                    {post.category.Name}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
          </div>



        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/posts');
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}
