import Head from 'next/head'

export default function Metadata({page}) {
    
    return ( 
        <Head>
            <title>Schrijf het uit!| {page}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
     );
}