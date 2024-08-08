import { useState } from "react";

// Componente Button para los botones de feedback
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

// Componente StatisticLine para mostrar una única estadística
const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  averageScore,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      {totalFeedback === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total feedback" value={totalFeedback} />
          <StatisticLine text="Average score" value={averageScore.toFixed(2)} />
          <StatisticLine
            text="Positive feedback"
            value={`${positivePercentage.toFixed(2)}%`}
          />
        </div>
      )}
    </div>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Controladores (handlers) para cada clic
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  // Calcular estadísticas
  const totalFeedback = good + neutral + bad;
  const averageScore = totalFeedback > 0 ? (good - bad) / totalFeedback : 0;
  const positivePercentage =
    totalFeedback > 0 ? (good / totalFeedback) * 100 : 0;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedback={totalFeedback}
        averageScore={averageScore}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

export default App;
