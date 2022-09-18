import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableContainer } from './TableContainer';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

export default {
  title: 'components/Table',
  component: Table,
} as ComponentMeta<typeof TableContainer>;

const Template: ComponentStory<typeof TableContainer> = (args) => <TableContainer {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell variant="head" sticky>
            HEAD1
          </TableCell>
          <TableCell variant="head" sticky>
            HEAD2
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>BODY1</TableCell>
          <TableCell>BODY2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
