// import { PropTypes } from "react";
import PropTypes from 'prop-types';
import { ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions =({onClick, feedbackOptions}) => {
	return (
		<ButtonWrapper>
			{Object.keys(feedbackOptions).map((key, index) => {
				// console.log('object :>> ', index);
				return(
					<button
					className="optionButton"
					key={index}
					onClick={() => onClick(key)}>
							{key}
					</button>
				);
			})}
		</ButtonWrapper>
	);
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};
