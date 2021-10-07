/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import Styles from './Players.styles'
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const SectionTeam = styled.section`${Styles.sectionTeam}`

const ContainerPlayers = styled.div`${Styles.playerDiv}`

const CardPlayer = styled.article`${Styles.cardPlayer}`

const ImagePlayer = styled.img`${Styles.imagePlayer}`

const PlayerName = styled.h3`${Styles.playerName}`

const ActionButtons = styled.div`${Styles.actionButtons}`

const Title = styled.h2`${Styles.title}`

const Players = ({ players }) => (
    <SectionTeam>
        <Title>Galaxy FC</Title>
        <ContainerPlayers>
            {
                players.map((player, index) => (
                    <CardPlayer key={index}>
                        <ImagePlayer src={player.photo} alt={player.name} />
                        <PlayerName>{player.name}</PlayerName>
                        <ActionButtons>
                            <Button isHeadlines/>
                            <Button />
                        </ActionButtons>
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

//const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, {})(Players);
