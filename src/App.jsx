import Dock from "#components/Dock";
import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import { Draggable } from "gsap/Draggable";

import gsap from "gsap";
import Terminal from "#windows/Terminal";
import Safari from "#windows/Safari";
import Resume from "#windows/Resume";
import Finder from "#windows/Finder";
import { ImgFile, TxtFile } from "#windows";
import Contact from "#windows/Contact";

gsap.registerPlugin(Draggable);

export default function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TxtFile />
      <ImgFile />
      <Contact />
    </main>
  );
}
