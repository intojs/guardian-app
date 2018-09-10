import { createGameFactory } from './create-game-factory';
import { playerService } from '../player/player-service';
import { calculateScore } from '../score/calculate-score';

export const createGame = createGameFactory(playerService, calculateScore);
