import "../styles/globals.css";
import { Provider } from "react-redux";
import dataStore from "../redux/store"
import ModalContainer from "../registry/locals/ModalContainer";
// import 'lenis/dist/lenis.css'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
// import Lenis from "lenis";

export default function App({ Component, pageProps }) {
  // const lenisRef = useRef()
  // const lenis = useLenis((lenis) => {
    // called every scroll
    // console.log(lenis)
  // })

  
  // useEffect(() => {
  //   // function update(time) {
  //   //   lenisRef.current?.lenis?.raf(time * 1000)
  //   // }
  //   // gsap.ticker.add(update)

  //   gsap.registerPlugin(ScrollTrigger)
  //   // lenis.on("scroll", ScrollTrigger.update);
  //   // gsap.ticker.lagSmoothing(0);
    

  // 	const lenis = new Lenis();
  //   lenis.on('scroll', ScrollTrigger.update);
  //   gsap.ticker.add((time) => {
  //     lenis.raf(time * 1000);
  //   });
  //   gsap.ticker.lagSmoothing(10);

  //   return () => gsap.ticker.remove(update)
  // }, [])


  return (
    <Provider store={dataStore}>
      <div className="relative">
        {/* <ReactLenis root  options={{ autoRaf: false }} ref={lenisRef}/> */}
        <Component {...pageProps} />
        <ModalContainer />
      </div>
    </Provider>
  );
}
