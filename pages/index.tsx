import * as React from "react";
import { Box, Text, Link, VStack, Grid } from "@chakra-ui/react";
import NextLink from "next/link";
import { Logo } from "../components/Logo";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";

const App = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="50vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack spacing={8}>
        <Logo h="15vmin" pointerEvents="none" />
        <Text fontSize="2xl" fontWeight="500">
          React Query Examples
        </Text>

        <NextLink href="crypto-market" passHref>
          <Link color="teal.500" fontSize="xl">
            Crypto Market
          </Link>
        </NextLink>
        <NextLink href="mama-muda" passHref>
          <Link color="teal.500" fontSize="xl">
            Mama Muda
          </Link>
        </NextLink>
      </VStack>
    </Grid>
  </Box>
);

export default App;
