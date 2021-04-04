import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={(good - bad) / total} />
          <Statistic text="positive" value={(good * 100) / total} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
