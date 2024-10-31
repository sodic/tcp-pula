import { Outlet } from "react-router-dom";

import {
  extendTheme,
  Box,
  Flex,
  Container,
  Image,
  ChakraProvider,
  VStack,
  HStack,
  Heading,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { logout, useAuth } from "wasp/client/auth";
import Logo from "./components/Logo";
import { theme } from "./components/Theme";
import { MouseProvider } from "./components/MouseProvider";
import Button from "./components/Button";

import tcpLogoUrl from "./tcp-logo.jpeg";

const Navbar = () => {
  return (
    <Box bg="#1a1736">
      <Container maxW={"container.lg"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Image width="50px" src={tcpLogoUrl} />
          {/* <Button onClick={() => logout()}>Logout</Button> */}
          <ChakraButton onClick={logout}>Logout</ChakraButton>
        </Flex>
      </Container>
    </Box>
  );
};

export default function App() {
  const { data: user } = useAuth();

  return (
    <ChakraProvider>
      <Box h="100vh">
        {!!user && <Navbar />}
        <Layout />
      </Box>
    </ChakraProvider>
  );
}

export function Layout() {
  const { data: user } = useAuth();

  return (
    <MouseProvider>
      <ChakraProvider theme={theme}>
        <VStack
          mt={10}
          mx="auto"
          spacing={10}
          justify="center"
          align="center"
          w="400px"
        >
          <HStack>
            <Logo />
            <Heading>To Do's</Heading>
          </HStack>
          {/* <span id='rewardId' /> */}

          <Outlet />
          {user!! && <Button onClick={logout}>Logout</Button>}
        </VStack>
      </ChakraProvider>
    </MouseProvider>
  );
}
