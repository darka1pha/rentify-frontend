'use client';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { useFormStatus } from 'react-dom';

const SubmitButton = ({
  children,
  ...otherProps
}: Omit<ButtonProps, 'type'>) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      {...otherProps}
    >
      {pending ? (
        <CircularProgress
          color='inherit'
          size={20}
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
