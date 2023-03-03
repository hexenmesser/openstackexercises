import { useState } from "react";
import "./styles.css";

const StatisticLine = ({ text, value }) => {
  return text == "positive" ? (
    <>
      <td>
        {text}
      </td>
      <td>
        {value} %
      </td>
    </>
  ) : (
    <>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </>
  );
};

const Button = ({
  feedback,
  good,
  setGood,
  neutral,
  setNeutral,
  bad,
  setBad,
  all,
  setAll,
  setAverage,
  setPositive,
}) => {
  const handleClick = (feedback) => {
    feedback === "good"
      ? setGood(good + 1)
      : feedback === "neutral"
      ? setNeutral(neutral + 1)
      : setBad(bad + 1);

    setAll(good + neutral + bad);
    setAverage((all / 3).toFixed(2));
    setPositive(((good / all) * 100).toFixed(2));
  };

  return (
    <>
      <button className="feedback-btn" onClick={() => handleClick(feedback)}>
        {feedback}
      </button>
    </>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <>

      <h1>statistics</h1>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <table>
          <tbody>
            <tr>
              <StatisticLine text="good" value={good} />
            </tr>
            <tr>
              <StatisticLine text="neutral" value={neutral} />
            </tr>
            <tr>
              <StatisticLine text="bad" value={bad} />
            </tr>
            <tr>
              <StatisticLine text="all" value={all} />
            </tr>
            <tr>
              <StatisticLine text="average" value={average} />
            </tr>
            <tr>
              <StatisticLine text="positive" value={positive} />
            </tr>
          </tbody>
        </table>
      ) : (
        <div>No feedback given</div>
      )}

    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Button
        feedback="good"
        good={good}
        setGood={setGood}
        neutral={neutral}
        setNeutral={setNeutral}
        bad={bad}
        setBad={setBad}
        all={all}
        setAll={setAll}
        setAverage={setAverage}
        setPositive={setPositive}
      />
      <Button
        feedback="neutral"
        good={good}
        setGood={setGood}
        neutral={neutral}
        setNeutral={setNeutral}
        bad={bad}
        setBad={setBad}
        all={all}
        setAll={setAll}
        setAverage={setAverage}
        setPositive={setPositive}
      />
      <Button
        feedback="bad"
        good={good}
        setGood={setGood}
        neutral={neutral}
        setNeutral={setNeutral}
        bad={bad}
        setBad={setBad}
        all={all}
        setAll={setAll}
        setAverage={setAverage}
        setPositive={setPositive}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  );
};

export default App;
