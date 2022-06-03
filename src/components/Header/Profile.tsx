import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Ivanildo Lopes</Text>
        <Text color="gray.300" fontSize="small">
          ivanildo.lopes.jr@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Ivanildo Lopes"
        src="https://github.com/ilopesjr.png"
      />
    </Flex>
  );
}
