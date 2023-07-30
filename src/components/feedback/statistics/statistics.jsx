import PropTypes from 'prop-types';
import { Box, BoxItem } from './statistics.styled';

export default function Statistics({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) {
    return (
        <Box>
            <BoxItem>Good: {good}</BoxItem>
            <BoxItem>Neutral: {neutral}</BoxItem>
            <BoxItem>Bad: {bad}</BoxItem>
            <BoxItem>Total: {total}</BoxItem>
            <BoxItem>Positive feedback: {positivePercentage} %</BoxItem>
        </Box>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};