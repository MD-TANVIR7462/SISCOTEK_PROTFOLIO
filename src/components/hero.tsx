import { MotionDiv } from "@/components/motion-div";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ConsultantBookingModal } from "./consultant-booking-modal";
import { HeroCategories } from "./hero-categories";
import { HeroImages } from "./hero-images";

export function Hero() {
  return (
    <section className="grid  min-h-[40rem] grid-cols-1 items-start justify-center gap-4 pt-8 md:grid-cols-2 lg:items-center lg:pt-0">
      <div className="relative order-last mx-auto flex max-w-max flex-col justify-center gap-y-6 md:order-first lg:justify-start lg:gap-y-8">
        <MotionDiv
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 0.75,
          }}
          viewport={{
            once: true,
          }}
          className="absolute -left-[11dvw] -top-[10.5dvw] lg:-left-[4.5rem] lg:-top-[4rem]"
        >
          <Particle />
        </MotionDiv>
        <MotionDiv
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.75,
          }}
          viewport={{
            once: true,
          }}
        >
          <h1 className="relative z-10 text-center text-[clamp(2.375rem,5vw+0.5rem,5rem)] leading-tight tracking-wider lg:text-start">
            <span className="font-bold text-primary">thrive</span> towards
            <br />
            your <span className="font-bold text-primary">envision.</span>
          </h1>
        </MotionDiv>
        <MotionDiv
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.75,
            delay: 0.125,
          }}
          viewport={{
            once: true,
          }}
        >
          <HeroCategories />
        </MotionDiv>
        <MotionDiv
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.75,
            delay: 0.25,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="mx-auto flex max-w-[90%] flex-col items-center justify-center gap-3 md:mx-0 md:flex-row">
            <ConsultantBookingModal />
            <Link href="/get-quote">
              <Button
                fullWidth
                className="h-10 border border-foreground/20 bg-background/80 px-4 text-base
              font-semibold text-foreground/80 shadow-md saturate-150 backdrop-blur-md
              md:min-w-[15rem] lg:h-14 lg:px-6 lg:text-xl"
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </MotionDiv>
      </div>
      <MotionDiv
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
      >
        <HeroImages />
      </MotionDiv>
    </section>
  );
}

function Particle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 73 70"
      className="h-[min(25dvw,10rem)] w-[min(25dvw,10rem)] -rotate-[180deg] scale-x-[-1] opacity-60"
    >
      <path
        d="M63.448 49.736C67.191 26.01 37.745 7.409 27.255 24.717C26.81 25.451 26.463 26.267 26.278 27.104C23.846 38.138 40.549 36.186 36.492 27.155C29.382 11.325 6.953 14.722 1.77 31.114"
        fill="transparent"
        strokeWidth="1.07"
        stroke="#ffffff"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
