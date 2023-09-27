export function Guesses({ guesses }: { guesses: string[] }) {
  const rows = [0, 1, 2, 3, 4, 5];

  return (
    <div className="guess-results">
      {rows.map((row) => (
        <p className="guess" key={row}>{guesses[row]}</p>
      ))}
    </div>
  );
}
