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
            <meta
                name="description"
                content={description}
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