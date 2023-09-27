import React from "react";

import { BottomBanner } from "./Result";
import { Hint } from "./Hint";
import { GuessInput } from "./GuessInput";
import { GuessResults } from "./Guesses";
import { WORDS } from "@/constants";

const word = WORDS[4];

export function Trash() {
  const [guesses, setGuesses] = React.useState<string[]>([]);
  const [gameStatus, setGameStatus] = React.useState<string>("playing");

  const handleGuess = (guess: string) => {
    const newGuesses: string[] = [...guesses, guess];
    setGuesses(newGuesses);

    if (newGuesses.length <= 6 && newGuesses.includes(word.answer)) {
      setGameStatus("won");
    } else if (newGuesses.length >= 6 && !newGuesses.includes(word.answer)) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <Hint word={word} guesses={guesses} />

      <p>Number of Guesses Made: {guesses.length}</p>

      <GuessResults answer={word.answer} guesses={guesses} />

      {gameStatus == "playing" && (
        <GuessInput
          handleGuess={handleGuess}
          hint={word.hint}
          status={gameStatus}
        />
      )}

      {gameStatus === "won" && (
        <BottomBanner variant="happy">
          <>
            <p>Congratulations!</p>
            <p>
              You put the <span>{word.hint}</span> in <span>{word.answer}</span>
              .
            </p>
          </>
        </BottomBanner>
      )}
      {gameStatus === "lost" && (
        <BottomBanner variant="sad">
          <>
            <p>Oh no!</p>
            <p>The correct answer was {word.answer}.</p>
          </>
        </BottomBanner>
      )}
    </>
  );
}
