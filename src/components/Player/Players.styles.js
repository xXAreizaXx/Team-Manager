import { css } from "styled-components";
import { TEAM_PLAYER, CARD_PLAYER } from "../../utils/constants";

export default {
  sectionTeam: css`
    background: ${TEAM_PLAYER};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin: 0 10px;
  `,

  playerDiv: css`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `,

  cardPlayer: css`
    background: ${CARD_PLAYER};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    margin: 5px 10px;
    width: 180px;
    flex-direction: column;
  `,
  
  imagePlayer: css`
    width: 150px;
    height: auto;
  `,
  playerName: css`
    display: flex;
    text-align: center;
  `,
};