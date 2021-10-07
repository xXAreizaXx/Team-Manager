import { css } from "styled-components";
import { BLUE, YELLOW, BLUE_OPACITY, YELLOW_OPACITY } from "../../utils/constants";

export default {
    btnWrapper: ({ isHeadlines }) => css`
        border: none;
        background: transparent;

        svg {
            background: ${isHeadlines ? BLUE : YELLOW};
            border-radius: 100%;
            padding: 8px;
            transition: .5s;
        }
        
        &:hover {
            svg {
                background: ${isHeadlines ? BLUE_OPACITY : YELLOW_OPACITY}; 
                transition: .5s;
            }
        }
  `,
};