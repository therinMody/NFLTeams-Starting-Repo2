import React from 'react';
import styled from '@emotion/styled';
//import { useQuery, gql } from '@apollo/client';


const PlayersList = () => {

    const [season, setSeason] = React.useState(2021);

    //add relevant seasons 
    var seasons = [2021, 2020, 2019];

    function handleSeasonChange() {
        setSeason(parseInt(document.getElementById("seasonSelection").value));
    }

    return (
        <Box>
            <Title>
                <h1>NFL Season Fantasy Leaders</h1>
                
                <DropDown id="seasonSelection" onChange={handleSeasonChange} value={season}>
                        {seasons.map((season) => (
                            <option key={season}>{season}</option> 
                        ))} 
                </DropDown>

            </Title>
        </Box>
    );

};

export default PlayersList;

const Box = styled.div({
    width: '100%',
    float: 'right'
});

const Title = styled.div({
    color: '#FFFFFF',
    marginTop: '200px',
    fontSize: '200%',
    font: 'Helvetica'
});

const DropDown = styled.select({
    fontSize: '100%',
    width: '25%',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    margin: '1%',
    padding: '1%',
});