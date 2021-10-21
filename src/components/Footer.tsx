import { FaLinkedin, FaGithub } from "react-icons/fa";

import * as Styled from './styles';

const Footer = () => {
    return (
        <Styled.FooterContainer>
            <Styled.IconRow>
                <Styled.Button hoverTheme>
                    <FaLinkedin />
                </Styled.Button>
                <Styled.Button hoverTheme>
                    <FaGithub />
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
