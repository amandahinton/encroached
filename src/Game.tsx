import React from "react";
import { Result } from "@/components/Result";
import { GuessInput } from "components/GuessInput";
import { Hint } from "components/Hint";
import { WORDS } from "@/constants";
import "styles/game.css";

const word = WORDS[Math.floor(Math.random() * WORDS.length)];

export function Game() {
  const [hint, setHint] = React.useState<string>(word.hint);
  const [guesses, setGuesses] = React.useState<string[]>([]);
  const [gameStatus, setGameStatus] = React.useState<string>("playing");

  const handleHintLeft = () => {
    let entireWord = word.prefix + word.hint + word.suffix;
    let remainingWord = entireWord.substr(0, (entireWord).length - (hint + word.suffix).length);
    setHint(remainingWord.charAt(remainingWord.length - 1) + hint);
  };

  const handleHintRight = () => {
  };

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
    <div className="game-wrapper">
      {gameStatus == "playing" && <Hint word={hint} leftEnabled={true} rightEnabled={true} handleHintLeft={handleHintLeft} handleHintRight={handleHintRight} />}
      {gameStatus !== "playing" && <h2>{word.answer}</h2>}

      {gameStatus == "playing" && (
        <GuessInput
          handleGuess={handleGuess}
          hint={word.hint}
          status={gameStatus}
        />
      )}

      {gameStatus === "won" && (
        <Result variant="happy">
          <>
            <p>Congratulations!</p>
            <p>
              You put the {word.hint} in {word.answer}.
            </p>
          </>
        </Result>
      )}
      {gameStatus === "lost" && (
        <Result variant="sad">
          <>
            <p>Oh no!</p>
            <p>The correct answer was {word.answer}.</p>
          </>
        </Result>
      )}
    </div>
  );
}
