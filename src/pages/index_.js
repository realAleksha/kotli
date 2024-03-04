import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
          <Heading as="h1" className="hero__title">
              <span>
                  <span style={{color: '#7F52FF'}}>K</span>
                  <span style={{color: '#8E47F7'}}>o</span>
                  <span style={{color: '#9D3CEF'}}>t</span>
                  <span style={{color: '#AC31E7'}}>l</span>
                  <span style={{color: '#BB26DF'}}>i</span>
                  <span style={{color: '#C81BD8'}}>t</span>
                  <span style={{color: '#B125EA'}}>e</span>
                  <span style={{color: '#C51ACF'}}>c</span>
                  <span style={{color: '#D40FB5'}}>t</span>
                  <span style={{color: '#E3049A'}}>u</span>
                  <span style={{color: '#F1007F'}}>r</span>
                  <span style={{color: '#E24462'}}>e</span>
              </span>
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
              {/*<Link*/}
              {/*    className="button button--secondary button--lg"*/}
              {/*    to="/docs/intro">*/}
              {/*    Get started️*/}
              {/*</Link>*/}
          </div>
      </div>
    </header>
  );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title={`${siteConfig.title}`}>
          <HomepageHeader />
        </Layout>
  );
}
