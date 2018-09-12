import { createGameFactory } from './createGameFactory';
import { playerService } from '../player/playerService';
import { calculateScore } from '../score/calculateScore';

export const createGame = createGameFactory(playerService, calculateScore);
