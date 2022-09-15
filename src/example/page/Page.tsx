import React from 'react';
import romanticUI from '../../assets/logo.svg';
import { Header } from '../../components/Header/Header';
import { Avatar } from '../../components/Avatar/Avatar';
import { Typography } from '../../components/Typography/Typography';
import { css } from '@emotion/css';
import { theme } from '../../theme';
import { IconButton } from '../../components/IconButton/IconButton';
import { MdArrowDropDown } from 'react-icons/md';
import { Flex } from '../../components/Flex/Flex';
import { Layout } from '../layout/Layout';

const logo = css`
  width: 200px;
  height: auto;
`;

const avatar = css`
  margin-right: ${theme.spacing(1)};
`;

export const Page: React.FC = () => {
  return (
    <Layout>
      <Typography as="a" href="hoge" />
    </Layout>
  );
};
