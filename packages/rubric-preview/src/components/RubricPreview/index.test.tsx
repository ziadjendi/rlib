import { render, screen, fireEvent } from "@testing-library/react";
import RubricPreview from "../RubricPreview";
import { ICriteria } from "./Helpers";

const criteriaMock: ICriteria[] = [
  {
    id: 1,
    name: "Criteria 1",
    description: "Description for Criteria 1",
    achievements: [
      { id: 1, title: "Exceeds", score: 4, description: "Criteria 1 Exceeds" },
      {
        id: 2,
        title: "Above Average",
        score: 3,
        description: "Criteria 1 Above Average",
      },
      { id: 3, title: "Meets", score: 2, description: "Criteria 1 Meets" },
      {
        id: 4,
        title: "Approaching",
        score: 1,
        description: "Criteria 1 Approaching",
      },
    ],
  },
  {
    id: 2,
    name: "Criteria 2",
    description: "Description for Criteria 2",
    achievements: [
      { id: 1, title: "Exceeds", score: 4, description: "Criteria 2 Exceeds" },
      {
        id: 2,
        title: "Above Average",
        score: 3,
        description: "Criteria 2 Above Average",
      },
      { id: 3, title: "Meets", score: 2, description: "Criteria 2 Meets" },
      {
        id: 4,
        title: "Approaching",
        score: 1,
        description: "Criteria 2 Approaching",
      },
    ],
  },
];

test("renders RubricPreview with correct criteria and title", () => {
  render(
    <RubricPreview criteria={criteriaMock} criteriaTitle="Sample Title" />
  );

  // Check if the criteria title is rendered
  expect(screen.getByText("Sample Title")).toBeInTheDocument();

  // Check if the criteria names and descriptions are rendered
  expect(screen.getByText("Criteria 1")).toBeInTheDocument();
  expect(screen.getByText("Description for Criteria 1")).toBeInTheDocument();
  expect(screen.getByText("Criteria 2")).toBeInTheDocument();
  expect(screen.getByText("Description for Criteria 2")).toBeInTheDocument();
});

test("updates score when cells are clicked", () => {
  const mockGetScore = jest.fn();

  render(
    <RubricPreview
      criteria={criteriaMock}
      criteriaTitle="Sample Title"
      getScore={mockGetScore}
    />
  );

  // Simulate a click on the first cell (Criteria 1 Exceeds)
  fireEvent.click(screen.getByText("Criteria 1 Exceeds"));

  // Verify if the score has been updated correctly
  expect(mockGetScore).toHaveBeenCalledWith(4); // Score for "Exceeds" is 4

  // Simulate a click on another cell (Criteria 2 Above Average)
  fireEvent.click(screen.getByText("Criteria 2 Above Average"));

  // Verify if the score has been updated to include both cell scores
  expect(mockGetScore).toHaveBeenCalledWith(7); // 4 (from Criteria 1 Exceeds) + 3 (from Criteria 2 Above Average)
});

test('checks if all criteria are scored', () => {
    const mockIsScored = jest.fn();
    const mockGetScore = jest.fn();
  
    render(
      <RubricPreview
        criteria={criteriaMock}
        criteriaTitle="Sample Title"
        getScore={mockGetScore}
        isScored={mockIsScored}
      />
    );
  
    // Initially, not all criteria should be scored
    expect(mockIsScored).toHaveBeenCalledWith(false);
  
    // Click on a cell in Criteria 1 (Criteria 1 Exceeds)
    fireEvent.click(screen.getByText('Criteria 1 Exceeds'));
    expect(mockIsScored).toHaveBeenCalledWith(false); // Still not all scored, one criterion left
  
    // Click on a cell in Criteria 2 (Criteria 2 Above Average)
    fireEvent.click(screen.getByText('Criteria 2 Above Average'));
    expect(mockIsScored).toHaveBeenCalledWith(true); // All criteria have been scored
  });
