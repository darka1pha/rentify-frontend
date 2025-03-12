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
import { useTranslations } from 'next-intl';

const SearchSection = () => {
  const t = useTranslations('home');

  return (
    <div className='flex flex-col gap-8 w-full items-center px-5 md:px-10 xl:px-24'>
      <span className='flex flex-wrap justify-center items-center gap-2 text-center'>
        {[
          { text: 'در', color: 'white' },
          { text: 'رنتیفای', color: 'primary' },
          { text: 'دنبال چه ملکی هستی؟', color: 'white' },
        ].map(({ text, color }, index) => (
          <Typography
            key={index}
            variant='h3'
            color={color}
            fontWeight='bold'
          >
            {text}
          </Typography>
        ))}
      </span>
      <Paper
        sx={{
          height: { xs: 'auto', sm: 80 },
          borderRadius: { xs: 4, sm: 40 },
          maxWidth: 900,
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, sm: 0 },
        }}
      >
        <div className='w-full flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4 sm:px-10'>
          {[
            {
              label: t('search.location'),
              options: ['تهران', 'شیراز', 'بندرعباس'],
            },
            { label: t('search.type'), options: ['آپارتمان', 'ویلا'] },
            { label: t('search.contract'), options: ['رهن', 'اجاره'] },
          ].map(({ label, options }, index) => (
            <FormControl
              key={index}
              variant='standard'
              sx={{ minWidth: 110, flex: '1 1 auto', maxWidth: '100%' }}
            >
              <InputLabel shrink>{label}</InputLabel>
              <Select
                sx={{
                  '& .MuiSelect-icon': { top: '-20px' },
                }}
              >
                <MenuItem value=''>
                  <em>هیچکدام</em>
                </MenuItem>
                {options.map((option, idx) => (
                  <MenuItem
                    key={idx}
                    value={option}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </div>

        {/* Search Button */}
        <Button
          sx={{
            height: { xs: 50, sm: '100%' },
            width: { xs: '100%', sm: 80 },
            borderRadius: { xs: '20px', sm: 0 },
            mt: { xs: 2, sm: 0 },
          }}
          variant='contained'
          startIcon={
            <Iconify icon={'solar:minimalistic-magnifer-line-duotone'} />
          }
        />
      </Paper>
    </div>
  );
};

export default SearchSection;
