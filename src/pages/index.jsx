import RootLayout from "@/components/RootLayout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="container mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-end px-20"
      >
        <div>
          <h1 className="font-semibold text-4xl md:text-6xl text-center lg:text-left">
            Your Trusted Destination for Apple Products
          </h1>
          <Image
            src={"/png/iphoneBanner.png"}
            width={450}
            height={540}
            alt="hero section"
            className="lg:hidden mx-auto my-8"
          />
          <p className="paragraph text-center lg:text-left my-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            odio accusantium nulla! Magnam laudantium et, adipisci nostrum modi
            quae vero?
          </p>

          <button className="py-3 px-6 bg-[#8338ec] text-white rounded font-bold capitalize block mx-auto lg:m-0">
            get in touch
          </button>
        </div>
        <Image
          src={"/png/iphoneBanner.png"}
          width={450}
          height={540}
          alt="hero section"
          className="hidden lg:block"
        />
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
