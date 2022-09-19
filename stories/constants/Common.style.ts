import styled from "styled-components";

export const SizedBox = styled.div<{
  height?: number;
  width?: number;
  bgColor?: string;
}>`
  ${({ height }) => height && `height: ${height}px;`}
  ${({ width }) => width && `width: ${width}px;`}
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
`;

export const FlexBox = styled.div<{
  direction?: string;
  alignItems?: string;
  gap?: number;
  bgColor?: string;
  position?: "relative" | "absolute" | "fixed";
}>`
  position: ${({ position }) => position || "static"};
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  ${({ gap }) => gap !== undefined && `gap: ${gap}px;`}

  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;
