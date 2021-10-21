import React from 'react';

import {
    HiOutlineArrowNarrowLeft,
    HiOutlineArrowNarrowRight
} from 'react-icons/hi';

import { MdKeyboardArrowRight } from 'react-icons/md';

import * as Styled from './styles';

import { IProjectList } from '../data/WorkProjects';

interface ISliderProps {
    projects: IProjectList;
    total: number;
    cursor: number;
    previous: () => void;
    next: () => void;
}

const WorkSlider: React.FC<ISliderProps> = (
    {
        projects: { title, category, description, image, demoLink, repoLink },
        total,
        cursor,
        previous,
        next
    }) => {
    return (
        <>
            <Styled.WorkLeft>
                <Styled.WorkSlideShow>
                    <Styled.IconRow>
                        <Styled.Button onClick={previous}>
                            <HiOutlineArrowNarrowLeft />
                        </Styled.Button>
                        0{cursor + 1}/0{total}
                        <Styled.Button onClick={next}>
                            <HiOutlineArrowNarrowRight />
                        </Styled.Button>
                    </Styled.IconRow>
                    <Styled.Image src={image} />
                </Styled.WorkSlideShow>
            </Styled.WorkLeft>

            <Styled.WorkRight>
                <Styled.WorkDescriptionContainer>
                    <Styled.Heading
                        as={'h1'}
                        size={Styled.HeadingSize.h1}
                        style={{ color: 'white', paddingTop: '2rem' }}>
                        {title}
                    </Styled.Heading>
                    <Styled.SectionTitle style={{ fontSize: '1.1rem', fontWeight: 'bold', padding: '.5rem 0' }}>
                        <Styled.SmallRedLine />{category}
                    </Styled.SectionTitle>
                    <Styled.Typography
                        size={Styled.TypographySize.reg}
                        color={Styled.ThemeColor.baseLightGrey}
                        spaced>
                        {description}
                    </Styled.Typography>
                </Styled.WorkDescriptionContainer>

                <Styled.WorkLink>
                    <Styled.BigButton color={Styled.ThemeColor.baseRed}>
                        <a href={demoLink} rel="noreferrer" target="_blank">
                            <Styled.Typography
                                size={Styled.TypographySize.reg}
                                style={{ display: 'flex' }}>
                                {'Visit site'}
                                <MdKeyboardArrowRight style={{ fontSize: '1.2rem' }} />
                            </Styled.Typography>
                        </a>
                    </Styled.BigButton>
                </Styled.WorkLink>
            </Styled.WorkRight>
        </>
    )
}

export default WorkSlider;
