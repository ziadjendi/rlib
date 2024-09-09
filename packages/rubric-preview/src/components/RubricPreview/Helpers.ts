export interface IAchievement {
  id: number;
  title: string;
  description?: string;
  score: number;
}

export interface ICriteria {
  id: number;
  name: string;
  description?: string;
  achievements: IAchievement[];
}

export interface ICell {
  rowIndex: number;
  colIndex: number;
  description: string;
  score: number;
}

function getMaxScore(
  achievements: Omit<IAchievement, "description">[],
  categories: Omit<ICriteria, "achievements">[]
) {
  return Math.max(...achievements.map(achievement => achievement.score)) * categories.length;
}

function getCategories(criteria: ICriteria[]): Omit<ICriteria, "achievements">[] {
  return criteria.map(category => ({
    id: category.id,
    name: category.name,
    description: category.description,
  }));
}

function getAchievements(criteria: ICriteria[]): Omit<IAchievement, "description">[] {
  return criteria[0].achievements.map(achievement => ({
    id: achievement.id,
    title: achievement.title,
    score: achievement.score,
  }));
}

function getCells(criteria: ICriteria[]): ICell[][] {
  return criteria.map((category, rowIndex) =>
    category.achievements.map((achievement, colIndex) => ({
      rowIndex,
      colIndex,
      description: achievement.description ?? "",
      score: achievement.score,
    }))
  );
}

const generateData = (criteria: ICriteria[]) => {
  const achievements: Omit<IAchievement, "description">[] = getAchievements(criteria);

  const categories: Omit<ICriteria, "achievements">[] = getCategories(criteria);

  const maxScore = getMaxScore(achievements, categories);

  const cells: ICell[][] = getCells(criteria);
  return { achievements, categories, maxScore, cells };
};

export default generateData;
