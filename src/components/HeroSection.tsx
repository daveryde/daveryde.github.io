import { useEffect, useRef } from 'react';

import { useLocation } from 'react-router';

import { Link } from 'react-router-dom';

import * as Styled from './styles';

const HeroSection = () => {
    const { hash } = useLocation();
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (hash === '') {
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <Styled.HeroContainer ref={sectionRef}>
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
                    <Link to={{ hash: '#project' }}>
                        <Styled.Typography
                            color={Styled.ThemeColor.baseWhite}
                            size={Styled.TypographySize.reg}>
                            See my work
                        </Styled.Typography>
                    </Link>
                </Styled.BigButton>
            </Styled.HeroContent>
        </Styled.HeroContainer>
    )
}

export default HeroSection;
