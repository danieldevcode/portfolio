import one312w from "/images/minified/biblebits.png-312px.min.webp";
import one505w from "/images/minified/biblebits.png-505px.min.webp";
import two312w from "/images/minified/randomquotemachine.png-312px.min.webp";
import two505w from "/images/minified/randomquotemachine.png-505px.min.webp";
import three312w from "/images/minified/tenzies.png-312px.min.webp";
import three505w from "/images/minified/tenzies.png-505px.min.webp";
import four312w from "/images/minified/markdown-previewer.png-312px.min.webp";
import four505w from "/images/minified/markdown-previewer.png-505px.min.webp";
import five312w from "/images/minified/drumlaunchpad.png-312px.min.webp";
import five505w from "/images/minified/drumlaunchpad.png-505px.min.webp";
import six312w from "/images/minified/calculator.png-312px.min.webp";
import six505w from "/images/minified/calculator.png-505px.min.webp";
import seven312w from "/images/minified/25plus5clock.png-312px.min.webp";
import seven505w from "/images/minified/25plus5clock.png-505px.min.webp";


// TODO: 312w image is to small, create a bigger
const projects = [
  {
    title: "Biblebits",
    imgSrc: { srcSet: `${one312w} 312w, ${one505w} 505w`, type: "image/webp" },
    webHref: "https://biblebits.danielcortes.tech/",
    codeHref: "https://github.com/danieldevcode/biblebits",
    description:
      "Discover Bible verses, highlight and share them with your loved ones.",
  },
  {
    title: "25 + 5 clock",
    imgSrc: {
      srcSet: `${seven312w} 312w, ${seven505w} 505w`,
      type: "image/webp",
    },
    webHref: "https://danieldevcode.github.io/25plus5clock/",
    codeHref: "https://github.com/danieldevcode/25plus5clock",
    description:
      "Set up your work and break sessions with this pomodoro-like clock.",
  },
  {
    title: "Markdown previewer",
    imgSrc: {
      srcSet: `${four312w} 312w, ${four505w} 505w`,
      type: "image/webp",
    },
    webHref: "https://danieldevcode.github.io/markdown-previewer/",
    codeHref: "https://github.com/danieldevcode/markdown-previewer",
    description:
      "Write markdown and preview it as you are typing. Supports code highlighting.",
  },
  {
    title: "Calculator",
    imgSrc: {
      srcSet: `${six312w} 312w, ${six505w} 505w`,
      type: "image/webp",
    },
    webHref: "https://danieldevcode.github.io/calculator",
    codeHref: "https://github.com/danieldevcode/calculator",
    description:
      "Yep, another calculator, but this one supports your keyboard so you can calculate at the speed of light.",
  },
  {
    title: "Drum launchpad",
    imgSrc: {
      srcSet: `${five312w} 312w, ${five505w} 505w`,
      type: "image/webp",
    },
    webHref: "https://danieldevcode.github.io/drum-launchpad",
    codeHref: "https://github.com/danieldevcode/drum-launchpad",
    description: "Have some fun making your own beats.",
  },
  {
    title: "Quotes",
    imgSrc: {
      srcSet: `${two312w} 312w, ${two505w} 505w`,
      type: "image/webp",
    },
    webHref: "https://danieldevcode.github.io/randomquotemachine/",
    codeHref: "https://github.com/danieldevcode/randomquotemachine",
    description:
      "Discover inspirational quotes and share them on X and Tumblr.",
  },
  {
    title: "Tenzies",
    imgSrc: {
      srcSet: `${three312w} 312w, ${three505w} 505w`,
      type: "image/webp",
    },
    webHref: "https://danieldevcode.github.io/tenzies/",
    codeHref: "https://github.com/danieldevcode/tenzies",
    description: "Play Tenzies and see how fast can you beat the game.",
  },
];

export default projects;
