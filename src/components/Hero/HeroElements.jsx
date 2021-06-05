const { default: styled } = require("styled-components");

export const HeroSectionContent = styled.section`
  background: #f9f9ff;
`;

export const HeroContainer = styled.div`
  height: calc(100vh - 80px);
`;

export const Row = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Col = styled.div`
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Hello = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: #90acd1;
  letter-spacing: 4px;
  font-family: "Roboto", sans-serif;
  line-height: 1.625em;
`;
