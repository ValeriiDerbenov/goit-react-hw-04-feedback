import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";
import { Section } from "components/Section/Section";
import { Statistics } from "components/Statistics/Statistics";
import { useState } from "react"


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const onLeaveFeedback = state => {
  switch (state) {
    case 'good':
      setGood(prevGood => prevGood + 1);
      break;

    case 'neutral':
      setNeutral(prevNeutral => prevNeutral + 1);
      break;

    case 'bad':
      setBad(prevBad => prevBad + 1);
      break;

    default:
      return;
  }
  };

const countTotalFeedback = () => {
  return good + neutral + bad;
  };
  const total = countTotalFeedback();

const countPositiveFeedbackPercentage = () => {
  return Math.round((good / total) * 100) || 0;
  };


  const stateNames = Object.keys({ good, neutral, bad });
  // const totalFeedback = countTotalFeedback();
  // const totalPercentage = countPositiveFeedbackPercentage();

  return ( 
    <div>
    <Section title="Please leave feedback">
      <FeedbackOptions
        onLeaveFeedback={onLeaveFeedback}
        options={stateNames}>
      </FeedbackOptions>
    </Section>
    <Section title="Statistics">
      {countTotalFeedback() !== 0 ? (<Statistics      
      feedbackOptions={stateNames}
      good={good}
      neutral={neutral}
      bad={bad}
      total={countTotalFeedback()}
      positivePercentage={countPositiveFeedbackPercentage()}
      > </Statistics>) : (<Notification message="There is no feedback!" />)}   
    </Section>
  </div>
   );
}

// export default App;
/*
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => (total += el), 0);
  };

  countPositiveFeedbackPercentage = value => {
    return this.countTotalFeedback()
      ? Math.floor((value / this.countTotalFeedback()) * 100)
      : 0;
  };

  render()
  {return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onClick={this.onClick}
          feedbackOptions={this.state}>
        </FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() !== 0 ? (<Statistics      
        feedbackOptions={this.state}
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage(this.state.good)}
        > </Statistics>) : (<Notification message="There is no feedback!" />)}   
      </Section>
    </div>
      
  );}
};
*/