import { ICriteria } from "./Helpers";
import { CSSObject } from "../../utils/interfaces";
interface IRubricPreviewProps {
    criteria: ICriteria[];
    criteriaTitle: string;
    styles?: CSSObject;
    getScore?(score: number): void;
    isScored?(value: boolean): void;
}
declare const RubricPreview: ({ criteriaTitle, criteria, styles, getScore, isScored, }: IRubricPreviewProps) => import("react/jsx-runtime").JSX.Element;
export default RubricPreview;
