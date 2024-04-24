import { Box, Heading, Text } from '@chakra-ui/react';

function Home() {
  return (
    <Box p="4">
      <Heading as="h1" size="xl">Welcome to GPT Engineer Othello Game</Heading>
      <Text fontSize="lg" mt="4">Enjoy playing the classic Othello game right in your browser!</Text>
    </Box>
  );
}

export default Home;