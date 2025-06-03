function Joke({ joke }) {
  return (
    <div className="joke">
      <h2>{joke.setup}</h2>
      <p>{joke.punchline}</p>
    </div>
  );
}
export default Joke;