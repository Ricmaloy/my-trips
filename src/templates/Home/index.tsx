import { LinkWrapper } from 'components/LinkWrapper';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import dynamic from 'next/dynamic';
import { MapProps } from 'components/Map';
import { NextSeo } from 'next-seo';

const Map = dynamic(() => import('components/Map'), { ssr: false });
export default function Home({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title={'My trips'}
        description="A simple project by willian justen in NextJS na pratica"
        canonical="https://my-trips.ricardozamboni.com.br"
        openGraph={{
          url: 'https://my-trips.ricardozamboni.com.br',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips.ricardozamboni.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label={'About'} />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
