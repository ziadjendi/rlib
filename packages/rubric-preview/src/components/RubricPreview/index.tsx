import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import generateData, { ICell, ICriteria } from "./Helpers";
import { CSSObject } from "../../utils/interfaces";

interface IRubricPreviewProps {
  criteria: ICriteria[];
  criteriaTitle: string; // Criteria Title a text appear on the top left corner
  styles?: CSSObject;
  getScore?(score: number): void;
  isScored?(value: boolean): void;
}

const customStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    gap: "10px",
  },
  table: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "8px",
    backgroundColor: "var(--Primary-0, #FFF)",
    width: "100%",
    height: "fit-content",
    maxHeight: "calc(100% - 70px)",
    padding: "30px 20px 30px 25px",
  },
  score: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    height: "68px",
    padding: "26px 63px 26px 28px",
    borderRadius: "8px",
    backgroundColor: "var(--Primary-0, #FFF)",
    "& span:first-of-type": {
      fontWeight: "bold",
    },
  },
} satisfies CSSObject;

const RubricPreview = ({
  criteriaTitle,
  criteria,
  styles,
  getScore,
  isScored,
}: IRubricPreviewProps) => {
  const [selectedCells, setSelectedCells] = useState<ICell[]>([]);
  const [score, setScore] = useState<number>(0);
  const { achievements, categories, cells, maxScore } = generateData(criteria);

  const selectCellHandler = (cell: ICell) => {
    const selectedRowsIndex = selectedCells.map(cell => cell.rowIndex);
    const updatedSelectedCells = [...selectedCells].map(c =>
      c.rowIndex === cell.rowIndex ? cell : c
    );
    if (!selectedRowsIndex.includes(cell.rowIndex)) updatedSelectedCells.push(cell);

    const updatedScore = updatedSelectedCells.reduce((acc, cell) => acc + cell.score, 0);
    setScore(updatedScore);
    setSelectedCells(updatedSelectedCells);
  };

  const isSelected = (cell: ICell) => {
    return selectedCells.find(c => c.rowIndex === cell.rowIndex && c.colIndex === cell.colIndex)
      ? true
      : false;
  };

  useEffect(() => {
    getScore?.(score);
    isScored?.(selectedCells.length === categories.length);
  }, [score, selectedCells, categories, getScore, isScored]);

  return (
    <Typography component="div" sx={{ ...customStyles.root, ...styles }}>
      <Typography component="div" sx={customStyles.table}>
        <Header title={criteriaTitle} headers={achievements} />
        <Body
          categories={categories}
          cells={cells}
          isSelected={isSelected}
          selectCellHandler={selectCellHandler}
        />
      </Typography>
      <Typography component="div" sx={customStyles.score}>
        <Typography component="span">Total Score:</Typography>
        <Typography component="span">{`${score}/${maxScore}`}</Typography>
      </Typography>
    </Typography>
  );
};

export default RubricPreview;
