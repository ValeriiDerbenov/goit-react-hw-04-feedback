import { ButtonPart } from "./Section.styled"
import PropTypes from 'prop-types';

export const Section = ({title, children}) => {
	return (
		<ButtonPart>
			<h1>{title}</h1>
			{children}
		</ButtonPart>
	)
}

Section.propTypes = {
  title: PropTypes.string,
};