import biblebitsImg from "/biblebits.png";
import randomquotemachineImg from "/randomquotemachine.png";
import tenziesImg from "/tenzies.png";
import markdownImg from "/markdown-previewer.png";
import drumlaunchpadImg from "/drumlaunchpad.png";
import calculatorImg from "/calculator.png";
import clockImg from "/25plus5clock.png";

const projects = [
  {
    title: "Biblebits",
    imageSrc: biblebitsImg,
    webHref: "https://biblebits.danielcortes.tech/",
    codeHref: "https://github.com/danieldevcode/biblebits",
    description:
      "Discover Bible verses, highlight and share them with your loved ones.",
  },
  {
    title: "25 + 5 clock",
    imageSrc: clockImg,
    webHref: "https://danieldevcode.github.io/25plus5clock/",
    codeHref: "https://github.com/danieldevcode/25plus5clock",
    description:
      "Set up your work and break sessions with this pomodoro-like clock.",
  },
  {
    title: "Markdown previewer",
    imageSrc: markdownImg,
    webHref: "https://danieldevcode.github.io/markdown-previewer/",
    codeHref: "https://github.com/danieldevcode/markdown-previewer",
    description:
      "Write markdown and preview it as you are typing. Supports code highlighting.",
  },
  {
    title: "Calculator",
    imageSrc: calculatorImg,
    webHref: "https://danieldevcode.github.io/calculator",
    codeHref: "https://github.com/danieldevcode/calculator",
    description:
      "Yep, another calculator, but this one supports your keyboard so you can calculate at the speed of light.",
  },
  {
    title: "Drum launchpad",
    imageSrc: drumlaunchpadImg,
    webHref: "https://danieldevcode.github.io/drum-launchpad",
    codeHref: "https://github.com/danieldevcode/drum-launchpad",
    description: "Have some fun making your own beats.",
  },
  {
    title: "Quotes",
    imageSrc: randomquotemachineImg,
    webHref: "https://danieldevcode.github.io/randomquotemachine/",
    codeHref: "https://github.com/danieldevcode/randomquotemachine",
    description:
      "Discover inspirational quotes and share them on X and Tumblr.",
  },
  {
    title: "Tenzies",
    imageSrc: tenziesImg,
    webHref: "https://danieldevcode.github.io/tenzies/",
    codeHref: "https://github.com/danieldevcode/tenzies",
    description: "Play Tenzies and see how fast can you beat the game.",
  },
];

export default projects;
