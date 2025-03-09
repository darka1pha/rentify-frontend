'use client';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const RHFSubmitButton = ({
  children,
  ...otherProps
}: Omit<ButtonProps, 'type'> & { progress?: number }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <Button
      type='submit'
      {...otherProps}
    >
      {isSubmitting ? (
        <CircularProgress
          variant={
            otherProps.variant === 'contained' ? 'indeterminate' : 'determinate'
          }
          value={otherProps.progress}
          color='inherit'
          size={20}
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default RHFSubmitButton;
