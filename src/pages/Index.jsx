import { Container, VStack, Text, Heading, Button, Image, Box, IconButton } from "@chakra-ui/react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="teal.500">
          オンラインパチンコへようこそ！
        </Heading>
        <Text fontSize="xl" color="gray.600">
          最高のオンラインパチンコ体験をお楽しみください。今すぐプレイして、大きな賞金を狙おう！
        </Text>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1566563255308-753861417000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBwYWNoaW5rb3xlbnwwfHx8fDE3MTkwNDM3NTd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="オンラインパチンコ" borderRadius="md" />
        </Box>
        <VStack spacing={4}>
          <Button colorScheme="teal" size="lg" leftIcon={<FaPlay />}>
            今すぐプレイ
          </Button>
          <Button colorScheme="gray" size="lg" leftIcon={<FaInfoCircle />}>
            詳細を見る
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
