import { harkWorkExperience } from "./hark";
import { raidlogWorkExperience } from "./raidlog";
import { styleTechWorkExperience } from "./styletech";
import { wgmWorkExperience } from "./wgm";

type WorkHighlight = {
  title: string;
  description?: string;
  cvBullet: string;
};

export type WorkExperienceEntry = {
  company: {
    name: string;
    url: string;
    description: string;
  };
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: Array<WorkHighlight>;
  techStack: Array<string>;
  note?: string;
};

export const workExperienceData: WorkExperienceEntry[] = [
  harkWorkExperience,
  wgmWorkExperience,
  raidlogWorkExperience,
  styleTechWorkExperience,
];
