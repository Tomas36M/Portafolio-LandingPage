/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';

const data = [
  {
    id: 1,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    altText: 'html-5',
    title: 'HTML-5',
    text:
      'HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content.',
  },
  {
    id: 2,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    altText: 'css3',
    title: 'CSS3',
    text:
      'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML.',
  },
  {
    id: 3,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    altText: 'javascript',
    title: 'javaScript',
    text:
      'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.',
  },
  {
    id: 4,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    altText: 'node-js',
    title: 'Node-js',
    text:
      'Its a JavaScript free and open source cross-platform for server-side programming that allows users to build network applications quickly.'
  },
  {
    id: 5,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    altText: 'React',
    title: 'React',
    text:
      'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
  },
  {
    id: 6,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    altText: 'NPM',
    title: 'npm',
    text:
      'npm is the package manager for the Node JavaScript platform.',
  },
  {
    id: 7,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    altText: 'Boostrap',
    title: 'Boostrap',
    text:
      'Bootstrap is a free and open source front end development framework for the creation of websites and web apps.',
  },
  {
    id: 8,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    altText: 'material-ui',
    title: 'Material-UI',
    text:
      'Material-UI is simply a library that allows us to import and use different components to create a user interface in our React applications.',
  },
  {
    id: 9,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
    altText: 'Babel',
    title: 'Babel',
    text:
      'Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript',
  },
  {
    id: 10,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    altText: 'git',
    title: 'Git-Github',
    text:
      'Git is used to tracking changes in the source code, enabling multiple developers to work together on non-linear development.',
  },
  {
    id: 11,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    altText: 'Next-js',
    title: 'Next-js',
    text:
      'It lets you build server-side rendering and static web applications using React.',
  },
  {
    id: 12,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" ,
    altText: 'SASS',
    title: 'SASS',
    text:
      'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).',
  },
  {
    id: 13,
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" ,
    altText: 'VS-Code',
    title: 'VS-Code',
    text:
      'Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux and macOS.',
  }
];

export default function KeyFeature() {
  return (
    <section id="feature" sx={{ variant: 'section.KeyFeature' }}>
      <Container sx={{pb: '40px'}}>
        <SectionHeader slogan="Skills" title="These are the technologies I have worked with" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
