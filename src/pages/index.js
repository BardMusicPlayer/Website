import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const features = [
  {
    title: 'MogAmp',
	imageUrl: 'king.png',
    description: (
      <><Translate id="homepage.Description.MogAmp" description="The homepage description of MogAmp">
        Conduct an ensemble, sing in chat, play a solo, MogAmp controls it all! Playlist support coming soon.
      </Translate></>
    ),
  },
  {
    title: 'MogDoot',
    imageUrl: 'logo.png',
    description: (
      <><Translate id="homepage.Description.MogDoot" description="The homepage description of MogDoot">
        Play songs in game with high accuracy on command from MogAmp anywhere in the world.
      </Translate></>
    ),
  },
  {
    title: 'MogNotate',
    imageUrl: 'heart.png',
    description: (
      <><Translate id="homepage.Description.MogNotate" description="The homepage description of MogNotate">
        Convert and modify Midi files into MogAmp compatible format. Preview songs out of game.
      </Translate></>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="It's Moogle Magic!">

      <header className={clsx('heroBanner', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
			<Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/mogamp')}>
              <Translate id="homepage.GetStarted" description="The Get Started Button">Get Started</Translate>
            </Link>
          </div>
        </div>
      </header>
	  
	  <video className={clsx('videoBg', styles.videoBg)}poster="home-bg/poster.jpg" autoPlay loop playsInline muted >
	    <source src="home-bg/video.webm" type="video/webm" />
        <source src="home-bg/video.mp4" type="video/mp4" />
      </video>
       
    </Layout>
  );
}
