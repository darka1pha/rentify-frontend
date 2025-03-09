'use client';
import {
  Button,
  ButtonProps,
  CircularProgress,
  IconButton,
  IconButtonProps,
} from '@mui/material';
import { useFormStatus } from 'react-dom';

const SubmitIconButton = ({
  children,
  ...otherProps
}: Omit<IconButtonProps, 'type'>) => {
  const { pending } = useFormStatus();
  return (
    <IconButton
      type='submit'
      {...otherProps}
    >
      {pending ? (
        <CircularProgress
          color='inherit'
          size={18}
        />
      ) : (
        children
      )}
    </IconButton>
  );
};

export default SubmitIconButton;
