import styled from 'styled-components';
import BaseCard from 'components/atoms/shared/BaseCard';
import Image from 'next/image';
import Button from 'components/atoms/Button';
import IconMapper from 'components/atoms/IconMapper';
import { Description } from './shared';
import { slideBottom } from 'libs/animations';
import { useRouter } from 'next/router';
import { Photo } from 'types/photo';
import NextLink from 'next/link'


const Container = styled.section`
  @media (min-width: 700px) {
    animation: ${slideBottom} 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    min-height: 80vh;
  }
`;

const Title = styled.h1`
  font-size: 1.9rem;
  margin-top: 1.8rem;
  &,
  & ~ p {
    color: #434c5e;
  }
  @media (min-width: 950px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 3rem;
    margin-top: 0;
  }
`;

const SubTitle = styled.h3`
  color: #5e81ac;
  margin-block: 0.3rem 0.8rem;
  line-height: 1.2;
  font-size: 1.3rem;
  @media (min-width: 950px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.5rem;
    margin-block: 0.4rem 0.9rem;
  }
`;

const Figure = styled(BaseCard)`
  width: 13rem;
  height: 18rem;
  position: relative;
  border: none;
  @media (min-width: 650px) {
    width: 15rem;
    height: 20rem;
  }
  @media (min-width: 768px) {
    width: 16rem;
    height: 20rem;
  }
  @media (min-width: 1024px) {
    width: 19rem;
    height: 25rem;
  }
  & img {
    border-radius: 0.4rem;
  }
`;

const FigureCaption = styled.figcaption`
  position: absolute;
  left: -25px;
  bottom: 0;
  font-size: 0.7rem;
  height: 20rem;
  text-align: end;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  @media (min-width: 700px) {
    writing-mode: horizontal-tb;
    text-orientation: upright;
    left: initial;
    right: 0;
    bottom: -2.5rem;
    height: fit-content;
    text-align: initial;
  }
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 25rem;
  .btn-download-resume {
    flex-direction: row-reverse;
    gap: 0.25rem;
    margin-top: 0.8rem;
    & span {
      position: relative;
      top: 3px;
      font-weight: 600;
      font-size: 0.813rem;
    }
  }
  .icon-upload {
    height: 0.95rem;
    width: 0.95rem;
  }
  @media (min-width: 700px) {
    width: 50%;
    .btn-download-resume {
      gap: 0.5rem;
      & span {
        font-size: 0.938rem;
        top: 4px;
      }
    }
    .icon-upload {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
  @media (min-width: 1200px) {
    max-width: 28rem;
    width: 80%;
    .btn-download-resume {
      margin-top: 1rem;
    }
  }
`;

type Props = {
  title: string;
  subtitle: string;
  photo: Photo;
  description?: string;
};

const Intro = ({
  title,
  subtitle,
  description,
  photo,

}: Props) => {
  const router = useRouter();

  return (
    <Container>
      <Figure
        role="figure"
        borderColor="#D8DEE9"
        borderWidth={6}
        spacesBetweenStrokes={15}
      >
        <Image
          layout="fill"
          priority
          src={photo.urls.full}
          alt={photo.description ?? photo.alt_description}
          placeholder="blur"
          blurDataURL={photo.urls.thumb}
          quality={100}
        />
        <FigureCaption>
          Photo by{' '}
          <NextLink href={photo.user.links.html}>
            {photo.user.first_name + ' ' + photo.user.last_name}
          </NextLink>{' '}
          on <NextLink href={photo.links.html}>Unsplash</NextLink>
        </FigureCaption>
      </Figure>
      <Wrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Description>{description}</Description>
        <Button
          onClick={() => router.push('/api/resume')}
          background="#4C566A"
          color="#ECEFF4"
          text="Resume"
          className="btn-download-resume"
        >
          <IconMapper name="upload" className="icon-upload" />
        </Button>
      </Wrapper>
    </Container>
  );
};


export default Intro;
