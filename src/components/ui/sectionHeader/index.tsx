import { Button, Typography } from '@mui/material';

const SectionHeader = ({
  buttonTitle = 'مشاهده همه',
  title,
}: {
  title: string;
  buttonTitle?: string;
}) => {
  return (
    <div className='flex justify-between items-center mb-8'>
      <Typography
        variant='h3'
        sx={{ fontSize: { xs: 20, md: 24 } }}
        fontWeight={'bold'}
      >
        {title}
      </Typography>
      <Button>{buttonTitle}</Button>
    </div>
  );
};

export default SectionHeader;
