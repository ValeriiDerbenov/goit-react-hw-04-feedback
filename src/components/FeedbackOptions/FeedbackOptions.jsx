import PropTypes from 'prop-types';
import { ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions =({options, onLeaveFeedback}) => {
	return (
		<ButtonWrapper>
			{options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
		</ButtonWrapper>
	);
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
