import React from 'react';
import {
  Box,
  Button,
  Dialog,
  Flex,
  Message,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '../components';
import { css } from '@emotion/css';
import { Layout } from './parts/Layout';
import { MdAdd, MdDownload } from 'react-icons/md';
import { rows } from '../misc/dummyData';
import { AddDialog } from './parts/AddDialog';
import { useAnchorEl } from '../util/useAnchorEl';

const logo = css`
  width: 200px;
  height: auto;
`;

const link = css`
  text-decoration: underline;
  text-underline-offset: 4px;
`;

const tableContainer = css`
  margin-top: 24px;
`;

export const Page: React.FC = () => {
  const { anchorEl, onOpen, onClose } = useAnchorEl();

  return (
    <Layout>
      <Flex>
        <Box width={'50%'}>
          <Message
            color="primary"
            header="テスト"
            content={
              <>
                このページは、
                <Typography
                  className={link}
                  as={'a'}
                  href={'https://github.com/t-keshi/romantic-ui'}
                >
                  RomanticUI
                </Typography>
                を使ったアプリケーション開発のデモ画面です。
              </>
            }
          />
        </Box>
        <Flex width={'50%'} alignItems="end" justifyContent="flex-end" gap={2}>
          <Button variant="outlined" startIcon={<MdDownload />}>
            ダウンロード
          </Button>
          <Button startIcon={<MdAdd />} onClick={onOpen}>
            品目の追加
          </Button>
          <AddDialog open={Boolean(anchorEl)} onClose={onClose} />
        </Flex>
      </Flex>
      <TableContainer className={tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell variant="head" sticky sortable>
                品目
              </TableCell>
              <TableCell variant="head" sticky sortable>
                カロリー
              </TableCell>
              <TableCell variant="head" sticky sortable>
                炭水化物
              </TableCell>
              <TableCell variant="head" sticky sortable>
                脂質
              </TableCell>
              <TableCell variant="head" sticky>
                タンパク質
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};
