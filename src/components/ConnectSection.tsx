import resume from '../assets/DavidCordovaResume.pdf';

import * as Styled from './styles';

interface IConnectSection {

}

const ConnectSection: React.FC<IConnectSection> = () => {

    return (
        <Styled.ConnectContainer>
            <Styled.ConnectHeader>
                <Styled.SectionTitle>
                    <Styled.Redline />{' '}Connect
                </Styled.SectionTitle>

                <Styled.Heading
                    as={'h1'}
                    size={Styled.HeadingSize.h1}>
                    Interested in working with me or perhaps just talk?
                </Styled.Heading>
            </Styled.ConnectHeader>

            <Styled.ConnectContent>
                <Styled.Typography
                    color={Styled.ThemeColor.baseLightGrey}
                    size={Styled.TypographySize.reg}
                    spaced>
                    Reach me on online, via email or mobile listed in my resume
                </Styled.Typography>

                <Styled.BigButton
                    color={Styled.ThemeColor.baseRed}
                    style={{ margin: '4rem 0' }}>
                    <a href={resume}>
                        <Styled.Typography
                            color={Styled.ThemeColor.baseWhite}
                            size={Styled.TypographySize.reg}>
                            Resume
                        </Styled.Typography>
                    </a>
                </Styled.BigButton>
            </Styled.ConnectContent>
        </Styled.ConnectContainer>
    )
}

export default ConnectSection;
