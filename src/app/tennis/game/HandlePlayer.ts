import { Player } from './Player';

export interface HandlePlayer {
  createPlayer(name: string, points?: number): Player;
  getName(player: Player): string;
  getPoints(player: Player): number;
  hasName(name: string, player: Player): boolean;
  incrementPoints(player: Player): Player;
}
