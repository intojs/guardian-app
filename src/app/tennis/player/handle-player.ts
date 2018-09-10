import { HandlePlayer } from '../game/HandlePlayer';
import { Player } from '../game/Player';

const createPlayer = (name: string, points?: number): Player => ({name, points: points || 0});

const getName = (player: Player): string => player.name;

const getPoints = (player: Player): number => player.points;

const hasName = (name: string, player: Player): boolean => name === player.name;

const incrementPoints = (player: Player): Player => ({...player, points: player.points += 1});

const handlePlayer: HandlePlayer = {
  createPlayer,
  getName,
  getPoints,
  hasName,
  incrementPoints
};

export { handlePlayer };
