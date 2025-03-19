import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import RegistrationForm from "./components/RegistrationForm";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <RegistrationForm />
      </main>
    </>
  );
}
