import {
  SectionHero,
  SectionCategories,
  Container,
  HeroWrapper,
  TitleWrapper,
  Title,
  TitleGreen,
  Description,
  Image,
  Button,
} from './MainPage.styled';
import heroMobile from '../../images/main-page/main-hero-mobile.png';
import heroMobile2x from '../../images/main-page/main-hero-mobile@2x.png';
import heroMobile3x from '../../images/main-page/main-hero-mobile@3x.png';
import heroTablet from '../../images/main-page/main-hero-tablet.png';
import heroTablet2x from '../../images/main-page/main-hero-tablet@2x.png';
import heroTablet3x from '../../images/main-page/main-hero-tablet@3x.png';
import heroDesktop from '../../images/main-page/main-hero-desktop.png';
import heroDesktop2x from '../../images/main-page/main-hero-desktop@2x.png';
import heroDesktop3x from '../../images/main-page/main-hero-desktop@3x.png';
import Search from 'components/Search/Search';
import ChooseYourBreakfast from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import PreviewCategories from 'components/PreviewCategories/PreviewCategories';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

const MainPage2 = () => {
  const navigate = useNavigate();
  const isTablet = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SectionHero>
        {isTablet ? (
          <Container>
            <HeroWrapper>
              <TitleWrapper>
                <Title>
                  <TitleGreen>So</TitleGreen>Yummy
                </Title>
                <Description>
                  "What to cook?" is not only a recipe app, it is, in fact, your
                  cookbook. You can add your own recipes to save them for the
                  future.
                </Description>
                <Search />
              </TitleWrapper>
              <Image
                src={heroMobile}
                srcSet={`${heroTablet} 378w, ${heroTablet2x} 756w, ${heroTablet3x} 1134w, ${heroDesktop} 578w, ${heroDesktop2x} 1156w, ${heroDesktop3x} 1734w`}
                sizes="(min-width: 1280px) 578px, (min-width: 768px) 378px, (min-width: 320px) 320px, 100vw"
                alt="Fruits and vegetables salad"
              />
              <ChooseYourBreakfast />
            </HeroWrapper>
          </Container>
        ) : (
          <Container>
            <HeroWrapper>
              <TitleWrapper>
                <Title>
                  <TitleGreen>So</TitleGreen>Yummy
                </Title>
                <Description>
                  "What to cook?" is not only a recipe app, it is, in fact, your
                  cookbook. You can add your own recipes to save them for the
                  future.
                </Description>
              </TitleWrapper>
              <Image
                src={heroMobile}
                srcSet={`${heroMobile} 320w, ${heroMobile2x} 640w, ${heroMobile3x} 960w`}
                sizes="(min-width: 320px) 320px, 100vw"
                alt="Fruits and vegetables salad"
              />
              <ChooseYourBreakfast />
            </HeroWrapper>
            <Search />
          </Container>
        )}
      </SectionHero>
      <SectionCategories>
        <PreviewCategories />
        <Button onClick={() => navigate('/categories')}>
          Other categories
        </Button>
      </SectionCategories>
    </>
  );
};

export default MainPage2;
