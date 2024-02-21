import a500wWebp from "/images/minified/biblebits-500px.min.webp";
import a500wJpeg from "/images/minified/biblebits-500px.min.jpeg";
import a700wWebp from "/images/minified/biblebits-700px.min.webp";
import b500wWebp from "/images/minified/randomquotemachine-500px.min.webp";
import b500wJpeg from "/images/minified/randomquotemachine-500px.min.jpeg";
import b700wWebp from "/images/minified/randomquotemachine-700px.min.webp";
import c500wWebp from "/images/minified/tenzies-500px.min.webp";
import c500wJpeg from "/images/minified/tenzies-500px.min.jpeg";
import c700wWebp from "/images/minified/tenzies-700px.min.webp";
import d500wWebp from "/images/minified/markdown-previewer-500px.min.webp";
import d500wJpeg from "/images/minified/markdown-previewer-500px.min.jpeg";
import d700wWebp from "/images/minified/markdown-previewer-700px.min.webp";
import e500wWebp from "/images/minified/drumlaunchpad-500px.min.webp";
import e500wJpeg from "/images/minified/drumlaunchpad-500px.min.jpeg";
import e700wWebp from "/images/minified/drumlaunchpad-700px.min.webp";
import f500wWebp from "/images/minified/calculator-500px.min.webp";
import f500wJpeg from "/images/minified/calculator-500px.min.jpeg";
import f700wWebp from "/images/minified/calculator-700px.min.webp";
import g500wWebp from "/images/minified/25plus5clock-500px.min.webp";
import g500wJpeg from "/images/minified/25plus5clock-500px.min.jpeg";
import g700wWebp from "/images/minified/25plus5clock-700px.min.webp";

const projects = [
  {
    title: "Biblebits",
    image: {
      srcSet: `${a500wWebp} 500w, ${a700wWebp} 700w`,
      src: a500wJpeg,
      type: "image/webp",
    },
    webHref: "https://biblebits.danielcortes.tech/",
    codeHref: "https://github.com/danieldevcode/biblebits",
    description:
      "Discover Bible verses, highlight and share them with your loved ones.",
  },
  {
    title: "25 + 5 clock",
    image: {
      srcSet: `${g500wWebp} 500w, ${g700wWebp} 700w`,
      src: g500wJpeg,
      type: "image/webp",
    },
    webHref: "https://danieldevcode.github.io/25plus5clock/",
    codeHref: "https://github.com/danieldevcode/25plus5clock",
    description:
      "Set up your work and break sessions with this pomodoro-like clock.",
  },
  {
    title: "Markdown previewer",
    image: {
      srcSet: `${d500wWebp} 500w, ${d700wWebp} 700w`,
      src: d500wJpeg,
      type: "image/webp",
    },
    webHref: "https://danieldevcode.github.io/markdown-previewer/",
    codeHref: "https://github.com/danieldevcode/markdown-previewer",
    description:
      "Write markdown and preview it as you are typing. Supports code highlighting.",
  },
  {
    title: "Calculator",
    image: {
      srcSet: `${f500wWebp} 500w, ${f700wWebp} 700w`,
      src: f500wJpeg,
      type: "image/webp",
    },
    webHref: "https://danieldevcode.github.io/calculator",
    codeHref: "https://github.com/danieldevcode/calculator",
    description:
      "Yep, another calculator, but this one supports your keyboard so you can calculate at the speed of light.",
  },
  {
    title: "Drum launchpad",
    image: {
      srcSet: `${e500wWebp} 500w, ${e700wWebp} 700w`,
      src: e500wJpeg,
      type: "image/webp",
    },
    webHref: "https://danieldevcode.github.io/drum-launchpad",
    codeHref: "https://github.com/danieldevcode/drum-launchpad",
    description: "Have some fun making your own beats.",
  },
  {
    title: "Quotes",
    image: {
      srcSet: `${b500wWebp} 500w, ${b700wWebp} 700w`,
      src: b500wJpeg,
      type: "image/webp",
    },
    webHref: "https://danieldevcode.github.io/randomquotemachine/",
    codeHref: "https://github.com/danieldevcode/randomquotemachine",
    description:
      "Discover inspirational quotes and share them on X and Tumblr.",
  },
  {
    title: "Tenzies",
    image: {
      srcSet: `${c500wWebp} 500w, ${c700wWebp} 700w`,
      src: c500wJpeg,
      type: "image/webp",
    },
    webHref: "https://danieldevcode.github.io/tenzies/",
    codeHref: "https://github.com/danieldevcode/tenzies",
    description: "Play Tenzies and see how fast can you beat the game.",
  },
];

export default projects;
