import { v4String } from 'uuid/interfaces';

export class Mainboard {
  id: v4String;
  name: string;
  supportedProcessors: Array<string>;
  ramSlots: number;
  maxRamTotal: number;
  integratedVideo: boolean;
}
