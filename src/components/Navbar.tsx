import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { FiBriefcase } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

import * as Styled from './styles';

import { Scrollspy } from "@makotot/ghostui";

interface INavbarProps {
    sectionRefs: React.RefObject<HTMLElement>[];
    handleScroll: (sectionRefIndex: number) => void;
}

const Navbar: React.FC<INavbarProps> = ({ sectionRefs, handleScroll }) => {

    return (
        <>
            <Styled.MobileNav>
                <Scrollspy sectionRefs={sectionRefs} offset={-100}>
                    {({ currentElementIndexInViewport }) => {
                        return (
                            <>
                                <Styled.BottomTab onClick={() => handleScroll(0)} active={currentElementIndexInViewport === 0 && true}>
                                    <BiHomeAlt />
                                </Styled.BottomTab>
                                <Styled.BottomTab onClick={() => handleScroll(1)} active={currentElementIndexInViewport === 1 && true}>
                                    <FiBriefcase />
                                </Styled.BottomTab>
                                <Styled.BottomTab onClick={() => handleScroll(2)} active={currentElementIndexInViewport === 2 && true}>
                                    <BiUser />
                                </Styled.BottomTab>
                                <Styled.BottomTab onClick={() => handleScroll(3)} active={currentElementIndexInViewport === 3 && true}>
                                    <HiOutlineMail />
                                </Styled.BottomTab>
                            </>
                        )
                    }
                    }
                </Scrollspy>
            </Styled.MobileNav>

            <Styled.DesktopNav>
                <Styled.NavbarLeft>
                    <Styled.NavbarItem onClick={() => handleScroll(0)}>
                            <Styled.RedSpan>D</Styled.RedSpan>avid <Styled.RedSpan>C</Styled.RedSpan>ordova
                    </Styled.NavbarItem>
                </Styled.NavbarLeft>

                <Styled.NavbarRight>
                    <Scrollspy sectionRefs={sectionRefs} offset={-150}>
                        {({ currentElementIndexInViewport }) => {
                            return (
                                <>
                                    <Styled.NavbarTab>
                                        <Styled.Bubble active={currentElementIndexInViewport === 1 && true} />
                                        <Styled.NavbarItem onClick={() => handleScroll(1)}>
                                            {'Work'}
                                        </Styled.NavbarItem>
                                    </Styled.NavbarTab>

                                    <Styled.NavbarTab>
                                        <Styled.Bubble active={currentElementIndexInViewport === 2 && true} />
                                        <Styled.NavbarItem onClick={() => handleScroll(2)}>
                                            {'About'}
                                        </Styled.NavbarItem>
                                    </Styled.NavbarTab>

                                    <Styled.NavbarTab>
                                        <Styled.Bubble active={currentElementIndexInViewport === 3 && true} />
                                        <Styled.NavbarItem onClick={() => handleScroll(3)}>
                                            {'Contact'}
                                        </Styled.NavbarItem>
                                    </Styled.NavbarTab>
                                </>
                            )
                        }
                        }
                    </Scrollspy>
                </Styled.NavbarRight>
            </Styled.DesktopNav>
        </>
    )
}

export default Navbar;
