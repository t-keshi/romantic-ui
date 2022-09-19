import React from 'react';
import { Header } from '../../components/ui/Header/Header';
import { Avatar } from '../../components/ui/Avatar/Avatar';
import { Typography } from '../../components/ui/Typography/Typography';
import { css } from '@emotion/css';
import { theme, useTheme } from '../../theme';
import { IconButton } from '../../components/ui/IconButton/IconButton';
import { MdAccountCircle, MdArrowDropDown, MdLogout, MdSettings } from 'react-icons/md';
import { Flex } from '../../components/ui/Flex/Flex';
import { useAnchorEl } from '../../util/useAnchorEl';
import {
  Box,
  ListItemIcon,
  ListItemText,
  Menu,
  SvgIcon,
  Tab,
  Tabs,
  Container,
} from '../../components';
import { MenuItem } from '../../components/ui/Menu/MenuItem';
import { AttachmentPin, Logo } from '../../components/icons';

const avatar = css`
  margin-right: ${theme.spacing(1)};
`;

const main = css`
  margin-top: ${theme.spacing(2)};
`;

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { anchorEl, onOpen, onClose } = useAnchorEl();
  const theme = useTheme();

  return (
    <Box minWidth={theme.breakpoints.values['md']} overflow="auto">
      <Header>
        <Logo />
        <Box ml={3}>
          <Tabs defaultValue={0}>
            <Tab label="タブ1" startIcon={<SvgIcon fontSize="sm" icon={<AttachmentPin />} />} />
            <Tab label="タブ2" startIcon={<SvgIcon fontSize="sm" icon={<MdAccountCircle />} />} />
          </Tabs>
        </Box>
        <Flex ml="auto" alignItems="center" position="relative">
          <Avatar className={avatar} />
          <Typography>山田 賢治</Typography>
          <IconButton size="sm" edge="end" onClick={onOpen}>
            <MdArrowDropDown />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
            <MenuItem>
              <ListItemIcon>
                <MdSettings />
              </ListItemIcon>
              <ListItemText>設定</ListItemText>
            </MenuItem>
            <MenuItem hasDivider={false}>
              <ListItemIcon>
                <MdLogout />
              </ListItemIcon>
              <ListItemText>ログアウト</ListItemText>
            </MenuItem>
          </Menu>
        </Flex>
      </Header>
      <Container className={main} as="main">
        {children}
      </Container>
    </Box>
  );
};
