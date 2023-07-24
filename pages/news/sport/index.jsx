import React from 'react'
import axios from 'axios';
import Link from 'next/link';
export async function getStaticProps() {
    // Fetch data from news API
    const res = await axios.get('https://newsapi.org/v2/everything?q=sports&apiKey=d6272349f9eb4c9087c2c93b82dfdbea');

    // By returning { props: news }, the BeautyNews component
    // will receive `news` as a prop at build time
    return {
        props: {
            news: res.data.articles
        },
        // optional revalidate parameter for incremental static regeneration (ISR)
        // it's set to one hour here
        revalidate: 3600,
    };
}

export default function index({news}) {
    console.log(news.slice(0,10))
  return (
    <div className='flex flex-col gap-y-4'>
        

        {news.slice(0,8).map((article,index) => {
            return (
                <div key={index} className='flex flex-col gap-y-2'>
                    <Link href={`/news/sport/${article.title.toString()}`} >
                    <h1 className='text-xl font-bold'>{article.title}</h1>
                    <p className='text-sm'>{article.description}</p>
                    <img className='w-1/2' src={article.urlToImage} alt={article.title} />
                    </Link>
                </div>
            )
                

        })}

        


      
    </div>
  )
}
