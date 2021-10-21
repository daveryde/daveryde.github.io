import styled, { createGlobalStyle, keyframes } from "styled-components";

export enum ThemeColor {
    baseWhite = "rgb(255,255,255)",
    baseGrey = "rgba(107,114,128)",
    baseBlack = "rgb(20,22,40)",
    lightBlack = "rgb(27,30,50)",
    baseLightGrey = "rgb(188,192,211)",
    baseRed = "rgb(253,67,112)",
    baseRedTransparent = "rgb(253,67,112, .4)"
}

export enum HeadingSize {
    h1 = "2.2rem",
    h2 = "1.7rem",
    h3 = "1.5rem",
    h4 = "1.3rem",
    h5 = "1.2rem",
    h6 = "1rem"
}

export enum TypographySize {
    xsm = ".6rem",
    sm = ".8rem",
    reg = "1rem",
    md = "1.3rem",
    lg = "1.5rem",
}

export const GlobalStyle = createGlobalStyle`
    * { 
      box-sizing: border-box;
    }

    body {
        background: ${ThemeColor.baseBlack};
        font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
        color: ${ThemeColor.baseWhite};
        margin: 0;

        @media only screen and (min-width: 550px) {
            &::-webkit-scrollbar {
                width: 3px;
            }
        
            &::-webkit-scrollbar-track {
                border-radius: 10px;
            }
        
            &::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.3);
                border-radius: 10px;
            }
        }
    }

    a {
        color: ${ThemeColor.baseLightGrey};
        text-decoration: none;
        transition: all .3s;

        &:hover {
            color: ${ThemeColor.baseWhite};
        }

        &:focus {
            outline: 0 !important;
        }
        
        &::visited {
            color: ${ThemeColor.baseWhite};
        }
    }
`;

// Keyframes

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

// General Buttons

export const Button = styled.button.attrs((p: any) => ({
    color: p.color ? p.color : 'rgba(38, 42, 67, .8)',
    hoverTheme: p.hoverTheme
}))`
    background: ${p => p.color};
    padding: .5rem .9rem 0 .9rem;
    font-family: Poppins;
    font-size: 1.8rem;
    color: ${ThemeColor.baseWhite};
    border: none;
    cursor: pointer;
    transition: all .3s;

    &:active {
        transform: translateY(2px);
        background: ${p => p.hoverTheme ? ThemeColor.baseRed : 'rgba(255, 255, 255, .3)'};
    }

    &:hover {
        background: ${p => p.hoverTheme ? ThemeColor.baseRed : 'rgba(255, 255, 255, .3)'};
    }
`;

export const BigButton = styled.button.attrs((p: any) => ({
    color: p.color
}))`
    width: 100%;
    background: ${p => p.color};
    padding: 0 2rem;
    font-family: Poppins;
    font-size: 1rem;
    font-weight: bold;
    color: ${ThemeColor.baseWhite};
    border: none;
    cursor: pointer;
    transition: all .3s;
    
    &:hover {
        background: ${ThemeColor.lightBlack};
    }

    @media only screen and (min-width: 550px) {
        width: 25%;
        max-width: 25%
        display: flex;
        margin-top: 2rem;
    }
`;

// General Typography

export const Heading = styled.span.attrs((p: any) => ({
    size: p.size
}))`
    margin-top: 0;
    font-size: ${p => p.size};
    font-weight: bold;
`;

export const Typography = styled.p.attrs((p: any) => ({
    size: p.size ? p.size : TypographySize.md,
    spaced: p.spaced,
    color: p.color ? p.color : ThemeColor.baseWhite
}))`
    font-size: ${p => p.size};
    color: ${p => p.color};
    line-height: ${p => p.spaced && '2rem'};

    @media only screen and (min-width: 550px) {
        line-height: 1.15rem;
    }
`;

// General Utility

export const SectionTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 2.5rem;
    font-size: ${TypographySize.reg};
    font-weight: bold;

    @media only screen and (min-width: 550px) {
        padding: 1rem 0 1rem 0;
    }
`;


export const Bubble = styled.div.attrs((p: any) => ({
    active: p.active
}))`
    display: inline-block;
    width: .5rem;
    height: .5rem;
    background: ${ThemeColor.baseRed};
    margin-right: .5rem;
    border-radius: 50%;
    opacity: ${p => p.active ? '1' : '0'};
    transition: opacity .5s ease-out;
`;

export const Redline = styled.div`
    display: inline-block;
    width: 4rem;
    height: .25rem;
    margin-right: 1rem;
    background: ${ThemeColor.baseRed};
`;

export const SmallRedLine = styled.div`
    display: inline-block;
    width: 1.5rem;
    height: .25rem;
    margin-right: 1rem;
    background: ${ThemeColor.baseRed};
`;

// Navigation Section

export const MobileNav = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    background: ${ThemeColor.baseBlack};
    z-index: 7;

    @media only screen and (min-width: 550px) {
        display: none;
    }
`;

export const DesktopNav = styled.nav`
    display: none;

    @media only screen and (min-width: 550px) {
        position: fixed;
        top: 0;
        width: 100%;
        padding: 1rem 2rem 0 2rem;
        display: flex;
        justify-content: space-between;
        background: ${ThemeColor.baseBlack};
        z-index: 7;
    }
`;

export const BottomTab = styled.div.attrs((p: any) => ({
    active: p.active
}))`
    width: 25%;
    max-height: 100%;
    padding: 1rem 0;
    margin: 0;
    color: ${ThemeColor.baseGrey};
    font-size: 1.6rem;
    text-align: center;
    border-top: 2px solid transparent;
    transform: border-top 3s;

    ${p => p.active &&
        `
        color: ${ThemeColor.baseWhite};
        border-top: 2px solid ${ThemeColor.baseRedTransparent};
        `
    }
`;

export const NavbarLeft = styled.div`
    display: none;

    @media only screen and (min-width: 550px) {
        display: flex;
    }
`;

export const NavbarRight = styled.div`
    display: none;

    @media only screen and (min-width: 550px) {
        display: flex;
        flex-flow: row nowrap;
    }
`;

export const NavbarTab = styled.div.attrs((p: any) => ({
    active: p.active
}))`

    @media only screen and (min-width: 550px) {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        padding: 0 1.3rem 0 0;
    }
`;

export const NavbarItem = styled.span`
    font-size: ${TypographySize.reg};
    font-weight: bold;
    padding: 1rem 0;
    color: ${ThemeColor.baseLightGrey};
    cursor: pointer;
    transition: all .3s;

    &:hover {
        color: ${ThemeColor.baseWhite};
    }
`;

// Hero Section

export const HeroContainer = styled.section`
    min-height: 100vh;
    animation: 1.5s ${fadeIn} ease-out;
`;

export const HeroContent = styled.div`
    min-height: 70vh;
    display: flex;
    flex-flow: column nowrap;
    padding: 10rem 2rem 2rem 2rem;

    @media only screen and (min-width: 550px) {
        padding: 13.5rem 4rem 2rem 4rem;
    }
`;

export const RedSpan = styled.span`
    color: ${ThemeColor.baseRed};
`;

// Work Section

export const WorkContainer = styled(HeroContainer)`
    background: ${ThemeColor.lightBlack};
    padding-top: 4rem;
`;

export const WorkHeader = styled.div`
    padding: 2rem;
    
    @media only screen and (min-width: 550px) {
        padding: 2rem 4rem;
    }
`;

export const WorkContent = styled(HeroContent)`
    padding: 2rem;

    @media only screen and (min-width: 550px) {
        flex-flow: row-reverse nowrap;
        padding: 2rem 4rem;
    }
`;

export const WorkSlideShow = styled(HeroContent)` 
    flex-flow: column-reverse nowrap;
    min-height: unset;
    padding: 0;
    
    @media only screen and (min-width: 550px) {
        flex-flow: column nowrap;
    }
`;

export const WorkLeft = styled.div`
    @media only screen and (min-width: 550px) {
        width: 100%;
        display: flex;
        margin-left: 2rem;

        div {
            margin-left: 2.4rem;
        }

        img {
            width: 85%;
            align-self: center;
        }
    }
`;

export const WorkRight = styled.div`
    @media only screen and (min-width: 550px) {
        width: 100%;
    }
`;

export const WorkDescriptionContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding-bottom: 2rem;
    color: ${ThemeColor.baseLightGrey};
    font-weight: bold;
    line-height: 1.7rem;
`;

export const WorkLink = styled.div`
    diplay: flex;
    padding-bottom: 5rem;
`;

export const Image = styled.img.attrs((p: any) => ({
    filter: p.filter
}))`
    width: 100%;
    padding: 0 0 3rem 0;
    object-fit: contain;
    ${p => p.filter &&
        `
        filter: contrast(200%) brightness(75%) saturate(1);
        `
    }

    @media only screen and (min-width: 550px) {
        width: 50%;
        background: gray;
        padding: 0;
    }
`;

export const IconRow = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 1.5rem 0;

    @media only screen and (min-width: 550px) {
        max-width: 30%;
        margin: 0 0 0 -1rem;
        padding-bottom: 4rem;
    }
`;

// About Section

export const AboutContainer = styled(WorkContainer)`
    background: ${ThemeColor.baseBlack};
`;

export const AboutHeader = styled(WorkHeader)``;

export const AboutContent = styled(HeroContent)`
    padding: 2rem;

    img {
        border-radius: 50%;
    }

    @media only screen and (min-width: 550px) {
        display: flex;
        flex-flow: row-reverse nowrap;
        align-items: flex-start;
        padding: 2rem 4rem;
    }
`;

export const AboutLeft = styled.div`
    @media only screen and (min-width: 550px) {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 85%;
        }
    }
`;

export const AboutRight = styled.div`
    @media only screen and (min-width: 550px) {
        width: 100%;
    }
`;

// Connect Section

export const ConnectContainer = styled(WorkContainer)`
    background: ${ThemeColor.lightBlack};
    min-height: 10vh;

    @media only screen and (min-width: 550px) {
        min-height: 30vh;
    }
`;

export const ConnectHeader = styled(WorkHeader)``;

export const ConnectContent = styled(HeroContent)`
    padding: 2rem;
    min-height: 10vh;

    @media only screen and (min-width: 550px) {
        min-height: 30vh;
        padding: 2rem 4rem;
    }
`;

// Footer

export const FooterContainer = styled.footer`
    background: ${ThemeColor.lightBlack};
    display: flex;
    flex-flow: column nowrap;
    align-items: spaced-evenly;
    padding: 2rem;

    @media only screen and (min-width: 550px) {
        min-height: 10vh;
        flex-flow: row-reverse nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 4rem;
    }
`;