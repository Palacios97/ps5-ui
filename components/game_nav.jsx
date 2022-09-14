import Head from "next/head";

export default function GameNav({title, description}) {
  return (
    <>
        <Head>
          
          <title>{title}</title>
          <meta name="description" content={description}/>
        </Head>
    </>
  );
}

