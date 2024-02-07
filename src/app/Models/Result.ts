import { CompetitionDTO } from "./Competition";
import { MemberDTO } from "./Member";

export interface ResultDTO {
    id: RankingKey;
    rank: number;
    score: number;
    member: MemberDTO;
    competition: CompetitionDTO;
  }

export interface RankingKey {
    num: number;
    code: string;
  }
  