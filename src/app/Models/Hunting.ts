import { CompetitionDTO } from "./Competition";
import { FishDTO } from "./Fish";
import { MemberDTO } from "./Member";

export interface HuntingDTO {
    id?: number; 
    numberOfFishes: number;
    fish: FishDTO;
    member: MemberDTO;
    competition: CompetitionDTO;
}