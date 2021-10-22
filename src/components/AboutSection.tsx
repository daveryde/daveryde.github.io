import ProfilePastel from '../assets/profile_pastel.png';

import * as Styled from './styles';

interface IAboutSection {
    handleScroll: (sectionRefIndex: number) => void;
}

const AboutSection: React.FC<IAboutSection> = ({ handleScroll }) => {

    return (
        <Styled.AboutContainer>
            <Styled.AboutHeader>
                <Styled.SectionTitle>
                    <Styled.Redline />{' '}About
                </Styled.SectionTitle>

                <Styled.Heading
                    as={'h1'}
                    size={Styled.HeadingSize.h1}>
                    Get a closer look at who I am.
                </Styled.Heading>
            </Styled.AboutHeader>

            <Styled.AboutContent>
                <Styled.AboutLeft>

                    <Styled.Image filter src={ProfilePastel} />
                </Styled.AboutLeft>

                <Styled.AboutRight>
                    <Styled.SectionTitle>
                        <Styled.SmallRedLine />{'Who am I'}
                    </Styled.SectionTitle>

                    <Styled.Typography
                        size={Styled.TypographySize.reg}
                        color={Styled.ThemeColor.baseLightGrey}
                        spaced>
                        Hi, I’m David. I am a technology and music enthusiast, otaku, full stack web developer,
                        musician, nonfluent polyglot.<br /><br /> Unafraid of my ability to identify an unimportant percentage
                        of vehicles just by the logo or sound of it’s exhaust. Driven to analyze objects, ideas,
                        and even conversations, heuristically for deeper insight into human interaction and web
                        technologies. <br /><br />Web development crossed my path in middle school, during an era when it was
                        uncommon to find personal computers in every household. Many hours were spent learning from
                        educational books from the library’s technology section. It took dedication, drive, and
                        passion mixed with persistence which turned out to be an abstract form of artistic expression.<br /><br />
                        I am enthusiastic in my voyage through the vast and intricate digital universe to find and implement solutions that generate harmony with human interactions.
                    </Styled.Typography>

                    <Styled.SectionTitle style={{ padding: '2rem 0' }}>
                        <Styled.SmallRedLine />{'Skills & Tools'}
                    </Styled.SectionTitle>
                    <Styled.Typography
                        size={Styled.TypographySize.reg}
                        color={Styled.ThemeColor.baseLightGrey}
                        spaced>
                        Design: Figma, Photoshop, Illustrator
                    </Styled.Typography>

                    <Styled.Typography
                        size={Styled.TypographySize.reg}
                        color={Styled.ThemeColor.baseLightGrey}
                        spaced>
                        Frontend Development: JavaScript (ES6), React, Next.js, Ionic, HTML, CSS/SCSS, Styled Components
                    </Styled.Typography>

                    <Styled.Typography
                        size={Styled.TypographySize.reg}
                        color={Styled.ThemeColor.baseLightGrey}
                        spaced>
                        Backend Development: Python, Django, Bottle, Node.js, Express.js
                    </Styled.Typography>

                    <Styled.Typography
                        size={Styled.TypographySize.reg}
                        color={Styled.ThemeColor.baseLightGrey}
                        spaced>
                        Infrastructure Development: AWS Lambda, AWS Fargate, AWS ECS, AWS CodeSuite, AWS Dynamo, AWS DocumentDB, AWS AppSync, Docker, NATS Event Streaming, RabbitMQ, bash
                    </Styled.Typography>

                    <Styled.BigButton
                        color={Styled.ThemeColor.baseRed}
                        style={{ margin: '4rem 0' }}>
                            <Styled.Typography
                                size={Styled.TypographySize.reg}
                                onClick={() => handleScroll(3)}>
                                Get in touch
                            </Styled.Typography>
                    </Styled.BigButton>
                </Styled.AboutRight>
            </Styled.AboutContent>
        </Styled.AboutContainer>
    )
}

export default AboutSection;