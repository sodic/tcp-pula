import Card from './Card';
import * as React from 'react';
import { Box, } from '@chakra-ui/react';

const iButton = ({ onClick, children }: {onClick: () => void, children: React.ReactNode}) => {
  return (
    <Box boxShadow={'md'} rounded={'0.5rem'}>
      <Card w={'full'} h={'full'} interactive>
        <Box
          onClick={onClick}
          className='flex w-full justify-center py-1 px-4 text-gray-700 font-medium'
          // className='flex w-full justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-md font-bold text-yellow-500 shadow-sm hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2'
        >
          {children}
        </Box>
      </Card>
    </Box>
  );
};

export default iButton;
