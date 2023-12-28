import {
  AbsoluteCenter,
  background,
  Box,
  DrawerFooter,
  Spacer,
  Text,
} from "@chakra-ui/react";
import NavBar from "../page/component/NavBar";
import { Outlet } from "react-router-dom";
import React from "react";

export function HomeLayout() {
  return (
    <>
      <Box w={"100%"} h={"100%"} backgroundColor={"palevioletred"}>
        <NavBar />
        <Box
          margin="auto"
          borderRadius="xl"
          w={"90%"}
          h={"100%"}
          backgroundColor={"white"}
        >
          <Outlet />
        </Box>
        <Spacer h={100} />
        <Box
          w="100%"
          h="150px"
          mt={5}
          textAlign="center"
          backgroundColor="gray.500"
          color="white"
        >
          <Box mt={15}>
            <Text mt={10} mb={2}>
              Company: 뮤레코드 대표:전희연
            </Text>
            <Text mb={2}>E-mail: muerecords@gmail.com</Text>
            <Text mb={2}>Address:</Text>
            <Text mb={2}>Bank info</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
