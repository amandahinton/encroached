import React from "react";

type Props = {
  handleGuess: (guess: string) => void;
  hint: string;
  status: string;
};

export function GuessInput({ handleGuess, hint, status }: Props) {
  const [newGuess, setNewGuess] = React.useState<string>("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleGuess(newGuess);
        setNewGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        disabled={status !== "playing"}
        id="guess-input"
        onChange={(e) => setNewGuess(e.target.value.toUpperCase())}
        pattern={`[A-Z]+${hint}[A-Z]+`}
        title={`Guess must sandwich "${hint}"`}
        required
        type="text"
        value={newGuess}
      />
      <button disabled={status !== "playing"}>Submit</button>
    </form>
  );
}
