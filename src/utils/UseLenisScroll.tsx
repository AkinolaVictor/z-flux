import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useLenisScroll(
  wrapperRef: React.RefObject<HTMLElement>,
  contentRef: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smoothWheel: true,
      // allowNestedScroll: true
    });

    let frame: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    
    // lenis.on('scroll', ScrollTrigger.update);
    // gsap.ticker.add((time:number) => {
    //   lenis.raf(time * 1000);
    // });
    // gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}