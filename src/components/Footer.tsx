import { FaLinkedin, FaGithub } from "react-icons/fa";

import * as Styled from './styles';

const Footer = () => {
    return (
        <Styled.FooterContainer>
            <Styled.IconRow>
                <Styled.Button hoverTheme>
                    <a href="https://www.linkedin.com/in/david-cordova-146b09174/" rel="noreferrer" target="_blank">
                        <FaLinkedin />
                    </a>
                </Styled.Button>
                <Styled.Button hoverTheme>
                    <a href="https://github.com/daveryde" rel="noreferrer" target="_blank">
                        <FaGithub />
                    </a>
                </Styled.Button>
            </Styled.IconRow>

            <Styled.Typography
                size={Styled.TypographySize.reg}
                color={Styled.ThemeColor.baseGrey}
                style={{ textAlign: 'center' }}>
                &copy; {new Date().getFullYear().toString()} David Cordova
            </Styled.Typography>
        </Styled.FooterContainer>
    )
}

export default Footer;
