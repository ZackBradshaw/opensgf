import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Stats from "../comps/Stats";
import Hero from "../comps/Hero";
import Particles from "../comps/Particles";
import syles from "../styles/particles.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Open SGF | Home</title>
        <meta name="keywords" content="Open SGF" />
      </Head>
      <div>
      <Hero />
      <Particles id="tsparticles" className={ syles.particles }/>
      <Stats />
      </div>
    </>
  );
}
