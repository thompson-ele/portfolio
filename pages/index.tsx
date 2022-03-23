import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import PillButtons from '../components/PillButtons';
import SocialButton from '../components/SocialButton';
import { MainHeading, SubHeading } from '../components/Headings';
import Window from '../components/Window';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ele Thompson | Front End Developer</title>
      </Head>

      <div className="container">
        <header>
          <Navigation />
        </header>

        <main style={{ clear: 'both' }}>
          <Window className="intro-window">
            <MainHeading>Hello!</MainHeading>
            <p>My name is <span style={{fontWeight: 'bold'}}>Ele Thompson</span> and I'm a front end developer based in Southern California! I like code, keyboards, and cats. <span>♡(•́ω•̀)♡​</span></p>
          </Window>

          <nav>
            <ul className="inline-list flex-container" style={{ justifyContent: 'center' }}>
              <li>
                <SocialButton color="#0A66C2" href="https://www.linkedin.com/in/elevilathompson/" target="_blank">
                  <img className="social-icon" src="/icon/linkedin.svg" />
                  LinkedIn
                </SocialButton>
              </li>
              <li>
                <SocialButton color="#181717" href="https://github.com/thompson-ele" target="_blank">
                  <img className="social-icon" src="/icon/github.svg" />
                  GitHub
                </SocialButton>
              </li>
              <li>
                <SocialButton color="#E4405F" href="https://www.instagram.com/keebnewb/" target="_blank" title="WARNING: do not click if you are sensitive to pictures of keyboards hehe">
                  <img className="social-icon" src="/icon/instagram.svg" />
                  Instagram
                </SocialButton>
              </li>
            </ul>
          </nav>

          <section>
            <SubHeading>Work</SubHeading>
            <div className="flex-container" style={{ alignItems: 'center' }}>
              <div className="flex-child">
                <Window className="flex-child" heading="REVOLVE">
                  <p>I currently work as a UX Front End Developer for REVOLVE, a fashion e-commerce website and brand.</p>
                  <p>Things that I love about my job:</p>
                  <ul>
                    <li>Working on a collaborative team of UX designers and developers</li>
                    <li>Making websites that not only look good but are web accessible and performant</li>
                    <li>Reviewing other developers code (probably where I learn the most tbh)</li>
                    <li>Hunting down bugs 👾</li>
                  </ul>
                  <PillButtons list={['HTML', 'CSS', 'JavaScript', 'jQuery', 'Java']} />
                </Window>
              </div>
              <a className="flex-child img-margin--left" href="https://revolve.com" target="_blank"><img src="/img/revolve-main-edited.png" /></a>
            </div>
          </section>

          <section>
            <SubHeading>Projects</SubHeading>
            <div className="flex-container"  style={{ alignItems: 'center' }}>
              <div className="flex-child img-margin--right">
                <img src="/img/old-portfolio-edited.png" style={{ marginBottom: 16 }} />
              </div>
              
              <div className="flex-child">
                <Window heading="Portfolio Redesign">
                  <p>My most recent project is this web portfolio! The last time I updated my portfolio was in 2017 and most of it was work from when I was 
                    in school so I wanted to update my portfolio to see how I've changed as a developer as well as experiment with new technologies.
                  </p>

                  <p>I mostly wanted to create a React.js project from scratch and show that I know the basics of creating functional components, 
                      hooks, and props. My current experience with React has been mostly self-taught but it is something I am very eager to learn more of.
                  </p>

                  <p><a className="link" href="https://elethompson.com/old-portfolio/" style={{ display: 'block', marginTop: 16, marginBottom: 16 }} target="_blank">Take a look at my old portfolio</a></p>
                  <p>👀<a className="link" href="https://github.com/thompson-ele/portfolio" style={{ fontWeight: 700, marginTop: 16 }} target="_blank"> See the code behind this portfolio site!</a></p>
                  <PillButtons list={['HTML', 'CSS', 'React.js', 'Next.js', 'Styled Components', 'Webpack']} />
                </Window>
              </div>
            </div>
          </section>

          <section>
            <SubHeading>Keyboards</SubHeading>
            <div className="flex-container">
              <div className="flex-child img-margin--right">
                <Window heading="⌨️">
                  <p>In my free time I've been learning electrical engineering and building my own custom mechanical keyboards. I have a weekly educational stream where
                    I build mechanical keyboards on <a className="link" href="https://twitch.tv/keebnewb" target="_blank">Twitch.</a>
                  </p>
                  <p>I enjoy helping out other people with their keyboards 
                    and have built a small Discord community surrounding the keyboard hobby. I also contribute code to QMK and VIA which are open-source keyboard firmware projects.
                  </p>
                  <PillButtons list={['Kicad', 'C Programming Language', 'Github']} />
                </Window>

                <img className="hide-sm" src="/img/pcb-zoom.png" />
              </div>
              <div className="flex-child checker-bg" style={{ padding: '40px 40px 40px 0' }}>
                <img src="/img/rekt-keyboard.png" />
              </div>
            </div>
            
          </section>

          
        </main>
      </div>

      <Footer id="contact" />
    </div>
  )
}

export default Home
