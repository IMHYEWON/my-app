import Head from "next/head";

interface HeaderProps {
    title: string;
    description: string;
    image: string;
    url: string;
  }

export default function SiteHead({ title, description, image, url} : HeaderProps) {
    const defaultImage = '@/public/images/default_og_image.png'
    return (
        <Head>
            <title>{title}</title>
            <meta title="title" content={title || "장해원의 홈ㅍHㅇ1ㅈ! -_-^ >0< "} />
            <meta
                name="description"
                content={description || "V-_-V 장혜원의 홈페이지닷 ^-^.."}
            />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image ? image : defaultImage} />
            <meta property="og:url" content={url} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}