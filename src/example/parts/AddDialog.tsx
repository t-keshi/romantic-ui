import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Checkbox,
  FormGroup,
  FormInput,
  FormSelect,
  Stack,
} from '../../components';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const AddDialog: React.FC<Props> = ({ open, onClose }) => {
  const options = [
    {
      label: '主食',
      value: 'main',
    },
    {
      label: '主菜',
      value: 'main-vegetable',
    },
    {
      label: '副菜',
      value: 'sub-vegetable',
    },
  ];
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>確認</DialogTitle>
      <DialogContent>
        <form noValidate>
          <Stack my={2} spacing={3}>
            <FormInput label="品目名" required fullWidth />
            <FormSelect label="栄養学的分類" required fullWidth options={options} />
            <FormGroup label="特徴" row>
              <Checkbox label="低カロリー" />
              <Checkbox label="低脂質" />
              <Checkbox label="高タンパク" />
            </FormGroup>
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined">キャンセル</Button>
        <Button variant="contained" color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
