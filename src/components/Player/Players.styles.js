import { css } from "styled-components";
import { TITLE_TEAM } from "../../utils/constants";

export default {
  sectionTeam: css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin: 0 10px;
  `,

  title: css`
    background: ${TITLE_TEAM};
    padding: 10px 20px;
    border-radius: 25px;
  `,

  playerDiv: css`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `,

  cardPlayer: css`
    background: rgb(2,0,36);
    background: linear-gradient(140deg, rgba(2,0,36,1) 0%, rgba(69,68,113,1) 25%, rgba(148,148,203,1) 50%, rgba(63,154,180,1) 75%, rgba(0,212,255,1) 100%);
    border-radius: 10px;
    border: 4px solid #000;
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

  actionButtons: css`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  `,
};