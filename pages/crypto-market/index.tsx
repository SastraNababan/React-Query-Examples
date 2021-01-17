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
            <Th isNumeric>High</Th>
            <Th isNumeric>Low</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>BTC</Td>
            <Td>495460000</Td>
            <Td>-5.11</Td>
            <Td isNumeric>536680000</Td>
            <Td isNumeric>492420000</Td>
          </Tr>
          <Tr>
            <Td>ETH</Td>
            <Td>16910000</Td>
            <Td>-1.45</Td>
            <Td isNumeric>18150000</Td>
            <Td isNumeric>16610000</Td>
          </Tr>
        </Tbody>
      </Table>
    </Layout>
  );
}
