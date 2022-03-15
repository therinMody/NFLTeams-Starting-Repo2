import React from 'react';
import styled from '@emotion/styled';
//import { useQuery, gql } from '@apollo/client';
//import { QueryData } from '../components';
//import PlayerCard from '../containers/player-card';

const PlayerResult = ({ date }) => {

    let [page, setPage] = React.useState(1);
    let total = 0;
    let totalPageCount = 0;

    let pageArray = new Array();
    let rank = 0;

    return (
        <>
            <TableContainer>
                <tbody>
                    <tr>
                        <td width='10%'>
                            Rank
                        </td>
                        <td width='30%'>
                            Name
                        </td >
                        <td width='15%'>
                            Position
                        </td>
                        <td width='15%'>
                            Team
                        </td>
                        <td width='30%'>
                            Fantasy Points
                        </td>
                    </tr>
                </tbody>

            </TableContainer>

            <br />

            <br />

            <PageBar>
                <tbody>
                    <tr>
                        <Cell>
                            <Button onClick={() => setPage(1)}>
                                Start
                            </Button>
                        </Cell>
                        <Cell>
                            <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
                                Prev
                            </Button>
                        </Cell>
                        <Cell>
                            <Button onClick={() => setPage(page)}>
                                {page}
                            </Button>
                        </Cell>
                        <Cell>
                            <Button disabled={page === (Math.ceil(total / 10))} onClick={() => setPage(page + 1)}>
                                Next
                            </Button>
                        </Cell>
                        <Cell>
                            <Button onClick={() => setPage(Math.ceil(total / 10))}>
                                {
                                    totalPageCount = Math.ceil(total / 10)
                                }
                            </Button>
                        </Cell>
                    </tr>
                </tbody>
            </PageBar>

        </>
    );
};

export default PlayerResult;

const TableContainer = styled.table({
    width: '100%',
    textAlign: 'right',
    fontSize: '125%',
});

const PageBar = styled.table({
    width: '100%',
    textAlign: 'center',
    fontSize: '125%',
    //border: '1px solid #FFFFFF',
    backgroundColor: '#000000',
    marginBottom: '1%',
});

const Cell = styled.td({
    width: '20%',
    border: '1px solid #FFFFFF',
});

const Button = styled.button({
    width: '100%',
    color: '#707070',
    backgroundColor: '#000000',
    border: '1px solid #000000',
    fontSize: '100%',
    ':hover': {
        color: '#FFFFFF',
        border: '1px solid #FFFFFF'
    }
});