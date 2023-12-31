import React from 'react';
import { Stack } from "@chakra-ui/layout";
import { Skeleton } from '@chakra-ui/skeleton';

const ChatLoading = () => {
  return (
    
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    
  );
}

export default ChatLoading