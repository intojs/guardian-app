import { CreateGame } from './CreateGame';
import { createGameFactory } from './game.factory';
import { calculateScore } from '../score/calculate-score';
import { playerService } from '../player/player.service';

export const createGame: CreateGame = createGameFactory(playerService, calculateScore);
