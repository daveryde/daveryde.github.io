import * as Styled from './styles';

interface IHeroSection {
    handleScroll: (sectionRefIndex: number) => void;
}

const HeroSection: React.FC<IHeroSection> = ({ handleScroll }) => {
    return (
        <Styled.HeroContainer>
            <Styled.HeroContent>
                <Styled.Heading
                    as={'h1'}
                    size={Styled.HeadingSize.h1}>
                    Hey, Im <Styled.RedSpan>David</Styled.RedSpan>
                </Styled.Heading>
                <Styled.Heading
                    as={'h2'}
                    size={Styled.HeadingSize.h2}>
                    a <Styled.RedSpan>professional</Styled.RedSpan> MacGyver
                </Styled.Heading>
                <Styled.Heading
                    as={'h2'}
                    size={Styled.HeadingSize.h2}>
                    {'& full-stack engineer'}
                </Styled.Heading>

                <Styled.Typography
                    color={Styled.ThemeColor.baseLightGrey}
                    size={Styled.TypographySize.reg}>
                    Stick around to see some of my work.
                </Styled.Typography>

                <Styled.BigButton color={Styled.ThemeColor.baseRed}>
                        <Styled.Typography
                            color={Styled.ThemeColor.baseWhite}
                            size={Styled.TypographySize.reg}
                            onClick={() => handleScroll(1)}>
                            See my work
                        </Styled.Typography>
                </Styled.BigButton>
            </Styled.HeroContent>
        </Styled.HeroContainer>
    )
}

export default HeroSection;
