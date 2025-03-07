"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10 ">
      <Image
        width={1200}
        height={1200}
        src="/image/herobg2.webp"
        alt="bg-img.png"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="relative">
        <div className="container mx-auto mt-[15rem] ">
          <div className="grid grid-cols-12 text-center lg:text-left">
            <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
              <Typography
                variant="h1"
                color="blue-gray"
                className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
              >
                Aim Universse
              </Typography>
              <Typography
                variant="lead"
                className="mb-10 mt-6 text-justify !text-gray-900"
              >
                Ready to take your brand to new heights? Look no further! We are
                your trusted partner in harnessing the power of digital
                marketing to expand your reach and amplify your impact.
              </Typography>
              <div className="mb-8 flex justify-center gap-4 lg:justify-start">
                <a href="#services">
                  <Button color="gray">view all Services</Button>
                </a>

                {/* <Button color="gray" variant="outlined">
                see pricing
              </Button> */}
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
                <Image
                  width={144}
                  height={144}
                  className="w-36 grayscale opacity-60"
                  src="/logos/logo-cp.svg"
                  alt="pinterest"
                />
                <Image
                  width={144}
                  height={144}
                  className="w-36 grayscale opacity-60"
                  src="/logos/logo-amazon.svg"
                  alt="netflix"
                />
                <Image
                  width={144}
                  height={144}
                  className="w-36 grayscale opacity-60"
                  src="/logos/logo-hikvision.svg"
                  alt="coinbase"
                />
                <Image
                  width={144}
                  height={144}
                  className="w-36 grayscale opacity-60"
                  src="/logos/logo-innoural.svg"
                  alt="google"
                />
              </div>
            </Card>
          </div>
        </div>
        <div className="absolute hidden lg:block -right-16 w-[700px] top-[40%]">
          <DotLottieReact
            src="https://lottie.host/2df97dd1-299c-4e34-ae28-e3404be1c9dc/AwItvezmMo.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
