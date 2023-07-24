
import Link from "next/link";



// export async function getServerSideProps(context) {
 
//   const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=333a47c28700024cb57760c88b0762f9`)
//   const weatherData = res.data

//   // will be passed to the page component as props
//   return { props: { weatherData } }
// }



export default function Home() {
  // console.log(articles)
  // console.log(weatherData)

  return (
    <div className="app-container">

      <Link href='/news/sport' > Sport</Link>
      {/* <Link href='/news/sports' > Sports</Link> */}
      <Link href='/news/beauty' > Beauty</Link>

      
    </div>
  )
}
