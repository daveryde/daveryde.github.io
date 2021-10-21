import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { FiBriefcase } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

import * as Styled from './styles';

const Navbar = () => {
    const location = useLocation();
    return (
        <>
            <Styled.MobileNav>
                <Styled.BottomTab active={location.hash === '' && true}>
                    <Link to={{ hash: '' }}>
                        <BiHomeAlt />
                    </Link>
                </Styled.BottomTab>
                <Styled.BottomTab active={location.hash === '#project' && true}>
                    <Link to={{ hash: 'project' }}>
                        <FiBriefcase />
                    </Link>
                </Styled.BottomTab>
                <Styled.BottomTab active={location.hash === '#about' && true}>
                    <Link to={{ hash: 'about' }}>
                        <BiUser />
                    </Link>
                </Styled.BottomTab>
                <Styled.BottomTab active={location.hash === '#connect' && true}>
                    <Link to={{ hash: 'connect' }}>
                        <HiOutlineMail />
                    </Link>
                </Styled.BottomTab>
            </Styled.MobileNav>

            <Styled.DesktopNav style={{}}>
                <Styled.NavbarLeft>
                    <Styled.NavbarItem>
                        <Link to={{ hash: '' }}>
                            <Styled.RedSpan>D</Styled.RedSpan>avid <Styled.RedSpan>C</Styled.RedSpan>ordova
                        </Link>
                    </Styled.NavbarItem>
                </Styled.NavbarLeft>

                <Styled.NavbarRight>
                    <Styled.NavbarTab>
                        <Styled.Bubble active={location.hash === '#project' && true} />
                        <Styled.NavbarItem>
                            <Link to={{ hash: 'project' }}>
                                {'Work'}
                            </Link>
                        </Styled.NavbarItem>
                    </Styled.NavbarTab>

                    <Styled.NavbarTab>
                        <Styled.Bubble active={location.hash === '#about' && true} />
                        <Styled.NavbarItem>
                            <Link to={{ hash: 'about' }}>
                                {'About'}
                            </Link>
                        </Styled.NavbarItem>
                    </Styled.NavbarTab>

                    <Styled.NavbarTab>
                        <Styled.Bubble active={location.hash === '#connect' && true} />
                        <Styled.NavbarItem>
                            <Link to={{ hash: 'connect' }}>
                                {'Contact'}
                            </Link>
                        </Styled.NavbarItem>
                    </Styled.NavbarTab>
                </Styled.NavbarRight>
            </Styled.DesktopNav>
        </>
    )
}

export default Navbar;
