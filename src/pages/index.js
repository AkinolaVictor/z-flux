import Footer from "../registry/locals/Footer";
import EachCard from "../registry/locals/home/EachCard";
import HomeDescription from "../registry/locals/home/HomeDescription";
import TopHeader from "../registry/locals/home/TopHeader";
import { pad_x } from "../utils/helper";
import { components_and_description } from "../utils/components_and_description";
import Head from "next/head";
// import "../"


export default function Home() {

  return (
    <div
      style={{background: "black"}}
      className={`flex flex-col min-h-screen items-center justify-start bg-zinc-50 font-sans dark:bg-black`}
    >
      <Head>
          <title>Z-Flux || Home</title>
          <meta name="description" content="The z-flux homepage" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/z-flux-1.png" />
      </Head>

      <TopHeader />
      <HomeDescription />

      <div className={`flex gap-6 flex-wrap justify-center items-center ${pad_x}`}>
        {
          components_and_description.map((item, index)=>{
            // const {name, desc, homehide} = item
            const {name, desc, homehide} = item
            if(homehide) return
            return (
              <EachCard 
                key={index}
                title={name}
                description={desc}
              />
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
}
