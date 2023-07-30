import PropTypes from 'prop-types';
import { BoxButton, Elements, Button } from './feedback.styled';

export default function FeedbackButtons({ options, onLeaveFeedback }) {
    return (
        <BoxButton>
            {options.map(option => (
                <Elements key={option}>
                    <Button
                        key={option}
                        type="button"
                        name={option}
                        onClick={onLeaveFeedback}
                    >
                        {option}
                    </Button>
                </Elements>
            ))}
        </BoxButton>
    );
}

FeedbackButtons.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};