import styled from "styled-components"

const Tile = styled.section`
    background: ${({ theme }) => theme.colors.tileBackground};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.colors.shadowA}, 0px 16px 58px ${({ theme }) => theme.colors.shadowB};
    border-radius: 4px;
`;

export const BorderedTile = styled(Tile)`
    border: 6px solid ${({ theme }) => theme.colors.tileBorder};
`;

export default Tile;