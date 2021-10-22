import { useState } from 'react';

// Components
import WorkSlider from './WorkSlider';

import { IProjectList, showcaseProjects } from '../data/WorkProjects';

// Styles
import * as Styled from './styles';

interface IWorkSection {

}

const WorkSection: React.FC<IWorkSection> = () => {
    const [showcase] = useState<IProjectList[]>(showcaseProjects);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const previousSlide = () => {
        const lastIndex = showcase.length - 1;
        const shouldResetIndex = currentIndex === 0;
        const cursor = shouldResetIndex ? lastIndex : currentIndex - 1;

        setCurrentIndex(cursor);
    }

    const nextSlide = () => {
        const lastIndex = showcase.length - 1;
        const shouldResetIndex = currentIndex === lastIndex;
        const cursor = shouldResetIndex ? 0 : currentIndex + 1;

        setCurrentIndex(cursor);
    }

    return (
        <Styled.WorkContainer>
            <Styled.WorkHeader>
                <Styled.SectionTitle>
                    <Styled.Redline />{' '}Work
                </Styled.SectionTitle>
                <Styled.Heading
                    as={'h1'}
                    size={Styled.HeadingSize.h1}>
                    Hand-picked projects for you to see
                </Styled.Heading>
            </Styled.WorkHeader>

            <Styled.WorkContent>
                <WorkSlider
                    projects={showcaseProjects[currentIndex]}
                    total={showcaseProjects.length}
                    cursor={currentIndex}
                    previous={previousSlide}
                    next={nextSlide} />
            </Styled.WorkContent>
        </Styled.WorkContainer>
    )
}

export default WorkSection;
