import { useState } from 'react';

import Layout from './Components/Layout';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Section from './Components/Section';
import Notification from './Components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setLeaveFeedback = type => {
    switch (type) {
      case 'good':
        return setGood(prevState => prevState + 1);

      case 'neutral':
        return setNeutral(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values({ good, neutral, bad }).reduce(
      (acc, feedback) => acc + feedback,
      0,
    );
  };

  const countPositiveFeedbackPercentage = () => {
    const goodFeedback = Object.values({ good });
    const totalFeedback = countTotalFeedback();
    return Math.round((goodFeedback * 100) / totalFeedback) + '%';
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <Layout>
      <h1>Kафе Espresso</h1>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={setLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Layout>
  );
};

export default App;
