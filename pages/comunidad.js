import Head from 'next/head';

import { WEB_NAME } from 'utils/constants';

import PageHero from 'components/shared/PageHero';
import PageWrapper from 'components/shared/PageWrapper';
import CommunityBody from 'components/community/CommunityBody';

export default function PageComunidad() {
  return (
    <>
      <Head>
        <title>{WEB_NAME} | Comunidad</title>
        <meta
          name="description"
          content="Evolve Sport Material es tu tienda de referencia de material deportivo. En nuestro amplio catálogo podrás encontrar equipos de alta calidad y última generación con los que llevar a cabo todo tipo de rutinas deportivas y de readaptación."
        />
      </Head>

      <PageWrapper>
        <PageHero heroTitle="únete." heroImage="community-hero.png" />

        <CommunityBody />
      </PageWrapper>
    </>
  );
}
