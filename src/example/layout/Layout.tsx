import React from 'react';
import romanticUI from '../../assets/logo.svg';
import { Header } from '../../components/ui/Header/Header';
import { Avatar } from '../../components/ui/Avatar/Avatar';
import { Typography } from '../../components/ui/Typography/Typography';
import { css } from '@emotion/css';
import { theme } from '../../theme';
import { IconButton } from '../../components/ui/IconButton/IconButton';
import { MdArrowDropDown } from 'react-icons/md';
import { Flex } from '../../components/ui/Flex/Flex';
import { Container } from '../../components/ui/Container/Container';

const logo = css`
  width: 200px;
  height: auto;
`;

const avatar = css`
  margin-right: ${theme.spacing(1)};
`;

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header>
        <img className={logo} src={romanticUI} />
        <Flex ml="auto">
          <Avatar className={avatar} />
          <Typography>山田 賢治</Typography>
          <IconButton size="sm" edge="end">
            <MdArrowDropDown />
          </IconButton>
        </Flex>
      </Header>
      <Container>{children}</Container>
    </div>
  );
};
