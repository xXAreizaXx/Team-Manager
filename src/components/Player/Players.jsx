/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import Styles from './Players.styles'
import PropTypes from 'prop-types';

const SectionTeam = styled.section`${Styles.sectionTeam}`

const ContainerPlayers = styled.div`${Styles.playerDiv}`

const CardPlayer = styled.article`${Styles.cardPlayer}`

const ImagePlayer = styled.img`${Styles.imagePlayer}`

const PlayerName = styled.h3`${Styles.playerName}`

const Players = ({ players }) => (
    <SectionTeam>
        <h2>Team Players</h2>
        <ContainerPlayers>
            {
                players.map((player, index) => (
                    <CardPlayer key={index}>
                        <ImagePlayer src={player.photo} alt={player.name} />
                        <PlayerName>{player.name}</PlayerName>
                        <div>
                            <button>Headlines</button>
                            <button>Substitutes</button>
                        </div>
                    </CardPlayer>
                ))
            }
        </ContainerPlayers>
    </SectionTeam>
)

Players.prototype = {
    players: PropTypes.array
}

const mapStateToProps = state => ({
    players: state.players,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Players);
