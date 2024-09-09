import { IAchievement, ICriteria } from "./Helpers";

const defaultAchievements1: IAchievement[] = [
  {
    id: 1,
    title: "Exceeds",
    score: 5,
    description:
      "Description could be provided by ed-team or authors could input it or edit manually",
  },
  {
    id: 2,
    title: "Above Average",
    score: 4,
    description:
      "Description could be provided by ed-team or authors could input it or edit manually",
  },
  {
    id: 3,
    title: "Meets",
    score: 3,
    description:
      "Description could be provided by ed-team or authors could input it or edit manually",
  },
  {
    id: 4,
    title: "Approaching",
    score: 2,
    description:
      "Description could be provided by ed-team or authors could input it or edit manually",
  },
  {
    id: 5,
    title: "Below Average",
    score: 1,
    description:
      "Description could be provided by ed-team or authors could input it or edit manually",
  },
  {
    id: 6,
    title: "Needs Improvement",
    score: 0,
    description:
      "Description could be provided by ed-team or authors could input it or edit manually",
  },
];

const defaultAchievements2: IAchievement[] = [...defaultAchievements1]; // You can use the same structure or create unique ones

const defaultAchievements3: IAchievement[] = [...defaultAchievements1];

const defaultAchievements4: IAchievement[] = [...defaultAchievements1];

const defaultAchievements5: IAchievement[] = [...defaultAchievements1];

const defaultAchievements6: IAchievement[] = [...defaultAchievements1];

const criteria: ICriteria[] = [
  {
    id: 1,
    name: "Category Title 1",
    description:
      "Description could be provided by ed-team or authors could input it or edit manually",
    achievements: defaultAchievements1,
  },
  {
    id: 2,
    name: "Category Title 2",
    description:
      "Description could be provided by ed-team or authors could input it or edit manually",
    achievements: defaultAchievements2,
  },
  {
    id: 3,
    name: "Category Title 3",
    description:
      "Description could be provided by ed-team or authors could input it or edit manually",
    achievements: defaultAchievements3,
  },
  {
    id: 4,
    name: "Category Title 4",
    description:
      "Description could be provided by ed-team or authors could input it or edit manually",
    achievements: defaultAchievements4,
  },
  {
    id: 5,
    name: "Category Title 5",
    description:
      "Description could be provided by ed-team or authors could input it or edit manually",
    achievements: defaultAchievements5,
  },
  {
    id: 6,
    name: "Category Title 6",
    description:
      "Description could be provided by ed-team or authors could input it or edit manually",
    achievements: defaultAchievements6,
  },
];

export default criteria;
