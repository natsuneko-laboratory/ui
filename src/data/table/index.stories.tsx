import type { Meta, StoryObj } from "@storybook/react";

import {
  Table,
  TableData,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
} from "./";
import { Container } from "../../layouts/container";

const meta = {
  title: "Data/Table",
  component: Table,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const DATA: {
  country: string;
  capital: string;
  population: string;
  language: string;
}[] = [
  {
    country: "United States",
    capital: "Washington D.C.",
    population: "309 Million",
    language: "English",
  },
  {
    country: "Sweden",
    capital: "Stockholm",
    population: "9 Million",
    language: "Swedish",
  },
  {
    country: "Japan",
    capital: "Tokyo",
    population: "122 Million",
    language: "Japanese",
  },
  {
    country: "Singapore",
    capital: "Singapore",
    population: "5 Million",
    language: "English",
  },
];

export const Default: Story = {
  render: () => (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Country</TableHeader>
            <TableHeader>Capital City</TableHeader>
            <TableHeader>Population</TableHeader>
            <TableHeader>Language</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {DATA.map((w) => (
            <TableRow key={w.country}>
              <TableData>{w.country}</TableData>
              <TableData>{w.capital}</TableData>
              <TableData>{w.population}</TableData>
              <TableData>{w.language}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  ),
};

export const WithAlign: Story = {
  render: () => (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Country (Align=Left)</TableHeader>
            <TableHeader>Capital City (Align=Center)</TableHeader>
            <TableHeader>Population (Align=Right)</TableHeader>
            <TableHeader>Language (Align=Justify)</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {DATA.map((w) => (
            <TableRow key={w.country}>
              <TableData align="left">{w.country}</TableData>
              <TableData align="center">{w.capital}</TableData>
              <TableData align="right">{w.population}</TableData>
              <TableData align="justify">{w.language}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  ),
};

export const ScrollHorizontal: Story = {
  render: () => (
    <Container className="w-64">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Country</TableHeader>
            <TableHeader>Capital City</TableHeader>
            <TableHeader>Population</TableHeader>
            <TableHeader>Language</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {DATA.map((w) => (
            <TableRow key={w.country}>
              <TableData>{w.country}</TableData>
              <TableData>{w.capital}</TableData>
              <TableData>{w.population}</TableData>
              <TableData>{w.language}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  ),
};
