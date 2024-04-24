import { Box, Heading, Grid, GridItem, Button } from '@chakra-ui/react';
import { useState } from 'react';

function OthelloGame() {
  const [board, setBoard] = useState(Array(8).fill(Array(8).fill(null)));
  const handleCellClick = (row, col) => {
    const newBoard = [...board];
    newBoard[row][col] = 'X'; // Placeholder for player's move
    setBoard(newBoard);
  };

  return (
    <Box p="4">
      <Heading as="h1" size="xl">Othello Game</Heading>
      <Grid templateColumns="repeat(8, 1fr)" gap={1}>
        {board.map((row, rowIndex) => row.map((cell, colIndex) => (
          <GridItem w="40px" h="40px" bg="gray.200" key={`${rowIndex}-${colIndex}`}>
            <Button onClick={() => handleCellClick(rowIndex, colIndex)}>{cell}</Button>
          </GridItem>
        )))}
      </Grid>
    </Box>
  );
}

export default OthelloGame;