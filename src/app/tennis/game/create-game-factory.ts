import { Game } from './Game';
import { HandlePlayer } from './HandlePlayer';
import { CalculateScore } from './CalculateScore';

export const createGameFactory = (handlePlayer: HandlePlayer, calculateScore: CalculateScore) =>
  (playerOneName: string, playerTwoName: string): Game => {
    let playerOne = handlePlayer.createPlayer(playerOneName);
    let playerTwo = handlePlayer.createPlayer(playerTwoName);

    const wonPoint = (playerName: string): void => {
      if (handlePlayer.hasName(playerName, playerOne)) {
        playerOne = handlePlayer.incrementPoints(playerOne);
      }
      if (handlePlayer.hasName(playerName, playerTwo)) {
        playerTwo = handlePlayer.incrementPoints(playerTwo);
      }
    };

    const getScore = (): string =>
      calculateScore(handlePlayer.getPoints(playerOne), handlePlayer.getPoints(playerTwo));

    return {
      wonPoint,
      getScore
    };
  };
