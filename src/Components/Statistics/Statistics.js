import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.feedback}>
      <span className={styles.item}>good: {good}</span>
      <span className={styles.item}>neutral: {neutral}</span>
      <span className={styles.item}>bad: {bad}</span>
      <span className={styles.item}>Total: {total}</span>
      <span className={styles.item}>
        Positive feedback: {positivePercentage}
      </span>
    </div>
  );
};

Statistics.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
