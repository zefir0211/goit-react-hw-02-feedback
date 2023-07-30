import PropTypes from 'prop-types';
import { SectionContainer, Title } from './sections.styled';

export default function Section({ title, children }) {
    return (
        <SectionContainer>
            <Title>{title}</Title>
            {children}
        </SectionContainer>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};