import styled from "styled-components";

interface BaseItemProps {
  blocks__typographySize: {
    navSize: string;
  };
}

const BaseItem = styled.div<BaseItemProps>`
  font-size: ${({ blocks__typographySize: { navSize } }) => navSize};
`;

export { BaseItem };
