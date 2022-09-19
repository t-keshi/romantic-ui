import { useState, useCallback } from 'react';

export const useAnchorEl = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();
  const onOpen = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);
  const onClose = useCallback(() => {
    setAnchorEl(undefined);
  }, []);
  const onToggle = anchorEl ? onClose : onOpen;

  return { anchorEl, onOpen, onClose, onToggle };
};
