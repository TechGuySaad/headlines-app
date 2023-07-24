import React from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function BeautyPost({ article }) {
    return (
        <div className='flex flex-col'>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <img src={article.urlToImage} alt={article.title} />
            <a href={article.url}>Read more</a>
            <Link href="/news/beauty">Back to beauty news</Link>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const res = await axios.get('https://newsapi.org/v2/everything?q=beauty&apiKey=d6272349f9eb4c9087c2c93b82dfdbea');
    const articles = res.data.articles;

    // Find the current article
    const article = articles.find(a => a.title === params.beautyPost);

    // Check if article exists
    if (!article) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            article,
        },
        revalidate: 3600,
    };
}

export async function getStaticPaths() {
    const res = await axios.get('https://newsapi.org/v2/everything?q=beauty&apiKey=d6272349f9eb4c9087c2c93b82dfdbea');
    const articles = res.data.articles;

    // Get the paths we want to pre-render based on articles
    const paths = articles.map((article) => ({
        params: { beautyPost: article.title },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}
