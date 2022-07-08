import Button from 'components/atoms/Button';
import IconMapper from 'components/atoms/IconMapper';
import Figure from 'components/molecules/Figure';
import { slideBottom } from 'libs/animations';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Photo } from 'types/photo';
import { Description } from './shared';

const Container = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  & figure {
    display: none;
  }
  @media (min-width: 768px) {
    animation: ${slideBottom} 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    min-height: 80vh;
    & figure {
      display: block;
    }
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-top: 1.8rem;
  text-align: start;
  &:nth-of-type(2) {
    display: none;
  }
  & ~ p {
    margin-top: 0.5rem;
  }
  @media (min-width: 768px) {
    &:nth-of-type(1) {
      display: none;
    }
    &:nth-of-type(2) {
      display: block;
      font-size: 2rem;
    }
  }
  &:nth-of-type(2) {
    @media (min-width: 950px) {
      font-size: 2.5rem;
    }
    @media (min-width: 1200px) {
      font-size: 3rem;
      margin-top: 0;
    }
    @media (min-width: 1330px) {
      font-size: 4rem;
    }
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
        top: 5px;
      }
    }
    .icon-upload {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
  @media (min-width: 1200px) {
    max-width: 30rem;
    width: 80%;
    .btn-download-resume {
      margin-top: 1rem;
    }
  }
`;

type Props = {
  title: string;
  description: string;
  photo: Photo;
};

const Intro = ({ title, description, photo }: Props) => {
  const router = useRouter();

  return (
    <Container>
      <Figure borderColor={photo.color}>
        <Image
          layout="fill"
          src={photo.urls.full}
          alt={photo.description ?? photo.alt_description}
          placeholder="blur"
          blurDataURL={photo.urls.thumb}
          quality={100}
          loading="lazy"
        />
        <Figure.Caption>
          Photo by{" "}
          <NextLink href={photo.user.links.html}>
            {photo.user.first_name + " " + photo.user.last_name}
          </NextLink>{" "}
          on <NextLink href={photo.links.html}>Unsplash</NextLink>
        </Figure.Caption>
      </Figure>
      <Wrapper>
        <Title>
          <div>Rendy</div>
          <div>Farhan</div>
          <div>Ramadhan</div>
        </Title>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button
          onClick={() => router.push("/api/resume")}
          className="btn-download-resume"
        >
          <span> Resume</span>
          <IconMapper name="upload" className="icon-upload" />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Intro;
