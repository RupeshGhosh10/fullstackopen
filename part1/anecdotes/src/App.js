import React, { useState } from 'react';
import Anecdotes from './Anecdotes';
import Button from './Button';
import Vote from './Vote';

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const chooseRandomAnecddotes = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const voteAnecdote = (index) => {
    const copy = [...votes];
    copy[index] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdotes anecdote={anecdotes[selected]} />
      <Vote vote={votes[selected]} />
      <div>
        <Button text="vote" handleClick={() => voteAnecdote(selected)} />
        <Button text="next ancedote" handleClick={chooseRandomAnecddotes} />
      </div>
      <h1>Anecdote with most votes</h1>
      <Anecdotes anecdote={anecdotes[votes.indexOf(Math.max(...votes))]} />
      <Vote vote={votes[votes.indexOf(Math.max(...votes))]} />
    </div>
  );
}

export default App;
