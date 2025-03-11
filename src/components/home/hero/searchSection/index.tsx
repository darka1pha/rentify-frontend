'use client';
import { Iconify } from '@/components/ui';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material';

const SearchSection = () => {
  return (
    <div className='flex flex-col gap-8 w-full items-center'>
      <span className='flex items-center gap-2'>
        <Typography
          variant='h3'
          color='white'
          fontWeight={'bold'}
        >
          در
        </Typography>
        <Typography
          variant='h3'
          color='primary'
          fontWeight={'bold'}
        >
          رنتیفای
        </Typography>
        <Typography
          variant='h3'
          color='white'
          fontWeight={'bold'}
        >
          دنبال چه ملکی هستی
        </Typography>
      </span>
      <Paper
        sx={{
          height: 104,
          borderRadius: 40,
          maxWidth: 900,
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <div className='h-full flex items-center flex-1 px-10 justify-center gap-12'>
          <FormControl
            variant='standard'
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id='demo-simple-select-standard-label'>سن</InputLabel>
            <Select
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              label='Age'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={20}>بیست</MenuItem>
              <MenuItem value={30}>سی</MenuItem>
              <MenuItem value={40}>چهل</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant='standard'
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id='demo-simple-select-standard-label'>سن</InputLabel>
            <Select
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              label='Age'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={20}>بیست</MenuItem>
              <MenuItem value={30}>سی</MenuItem>
              <MenuItem value={40}>چهل</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant='standard'
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id='demo-simple-select-standard-label'>سن</InputLabel>
            <Select
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              label='Age'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={20}>بیست</MenuItem>
              <MenuItem value={30}>سی</MenuItem>
              <MenuItem value={40}>چهل</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          sx={{ height: '100%', maxWidth: 158, width: '100%' }}
          onClick={() => console.log('aklsjdh')}
          variant='contained'
          startIcon={
            <Iconify icon={'solar:minimalistic-magnifer-line-duotone'} />
          }
        >
          جستجو
        </Button>
      </Paper>
    </div>
  );
};

export default SearchSection;
