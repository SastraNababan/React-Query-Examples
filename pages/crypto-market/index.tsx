import React from "react";
import {
  Badge,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  Text,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";

export default function Market() {
  return (
    <Layout title="Crypto Market">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Coin</Th>
            <Th>Last Price</Th>
            <Th>24h % Change</Th>
            <Th isNumeric>Total Volume</Th>
            <Th isNumeric>Market Cap</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Flex alignItems="center">
                <Image
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  boxSize="24px"
                  ignoreFallback={true}
                />

                <Text pl={2} fontWeight="bold" textTransform="capitalize">
                  Bitcoin
                </Text>
                <Badge ml={3}>BTC</Badge>
              </Flex>
            </Td>
            <Td>495460000</Td>
            <Td>-5.11</Td>
            <Td isNumeric>729292071672270</Td>
            <Td isNumeric>9600947757539514</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex alignItems="center">
                <Image
                  src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                  boxSize="24px"
                  ignoreFallback={true}
                />

                <Text pl={2} fontWeight="bold" textTransform="capitalize">
                  Ethereum
                </Text>
                <Badge ml={3}>ETH</Badge>
              </Flex>
            </Td>
            <Td>16910000</Td>
            <Td>-1.45</Td>
            <Td isNumeric>539816863146117</Td>
            <Td isNumeric>2144364989936726</Td>
          </Tr>
        </Tbody>
      </Table>
    </Layout>
  );
}
