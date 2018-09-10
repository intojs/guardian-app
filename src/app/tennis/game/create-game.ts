import { createGameFactory } from './create-game-factory';
import { handlePlayer } from '../player/handle-player';
import { calculateScore } from '../score/calculate-score';

export const createGame = createGameFactory(handlePlayer, calculateScore);
