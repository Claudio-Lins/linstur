import Head from 'next/head';

export default function Home() {
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

        <main className="flex relative items-center justify-center md:px-40 md:py-16 text-center rounded-lg">
          <div className="absolute">
            <h1 className="text-5xl font-medium text-black max-w-lg tracking-wide">
              LinsTur.
            </h1>
            <h2 className="text-2xl text-black mt-4">
              Porque. Viajer é preciso!!!!!
            </h2>
          </div>
        </main>
      </div>
    </>
  );
}
