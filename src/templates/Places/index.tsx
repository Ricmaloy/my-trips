import Image from 'next/image';
import { LinkWrapper } from 'components/LinkWrapper';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { NextSeo } from 'next-seo';

import * as S from './styles';

export type ImageProps = {
  url: string;
  width: string;
  height: string;
};

export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlacesTemplates({ place }: PlacesTemplateProps) {
  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        canonical="https://mytrips.com"
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body>
            <div
              dangerouslySetInnerHTML={{
                __html: place.description?.html || ''
              }}
            ></div>
          </S.Body>

          <S.Gallery>
            {place.gallery.map((image, index) => {
              return (
                <Image
                  key={image.url}
                  src={image.url}
                  alt={`image ${index}`}
                  width={1000}
                  height={600}
                  quality={75}
                  objectFit={'cover'}
                />
              );
            })}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
