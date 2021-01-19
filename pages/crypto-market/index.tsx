import React from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Layout from "../../components/Layout";

export default function Market() {
  return (
    <Layout title="Crypto Market">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Coin</Th>
            <Th>Last Price</Th>
            <Th>% Change</Th>
            <Th isNumeric>Total Volume</Th>
            <Th isNumeric>Maket Cap</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>BTC</Td>
            <Td>495460000</Td>
            <Td>-5.11</Td>
            <Td isNumeric>729292071672270</Td>
            <Td isNumeric>9600947757539514</Td>
          </Tr>
          <Tr>
            <Td>ETH</Td>
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
