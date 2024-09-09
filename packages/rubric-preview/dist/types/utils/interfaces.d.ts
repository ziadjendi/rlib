import { CSSProperties } from "react";
export type CSSStyles = CSSProperties | Record<string, CSSProperties>;
export type CSSObject = Record<string, CSSStyles | Record<string, CSSStyles>>;
