import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('UA-139735116-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
}

export const navigationClickEventGA = (sectionRef: string) => {
    ReactGA.event({ category: 'navigation', action: 'click', label: sectionRef });
}