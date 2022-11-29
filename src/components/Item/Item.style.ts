import styled, { css } from "styled-components";
import { HTMLAttributes } from "react";

type ItemStyledProps = HTMLAttributes<HTMLDivElement> & {
  itemColor: string;
};

export const ItemStyled = styled.div<ItemStyledProps>(
  ({ itemColor }) => css`
    display: flex;
    flex-direction: row;
    background-color: ${itemColor};
    gap: 10px;
    padding: 10px;
  `
);

export const ButtonStyled = styled.button``;
