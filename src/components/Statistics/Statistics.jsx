import { Box, Grid } from "./Statistics.styled"
import PropTypes from 'prop-types';

export const Statistics = ({title, good, neutral, bad, total, positivePercentage}) => {

	return(
		<Box>
			<h2>{title}</h2>
			<Grid>
			<p>Good: {good}</p>
			<p>Neutral: {neutral}</p>
			<p>Bad: {bad}</p>
		</Grid>
		<div>
			<p>Total: {total}</p>
			<p>Positive: {positivePercentage}%</p>
		</div>
		</Box>
	)
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};