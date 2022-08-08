import { Divider } from '@mantine/core';

export const HorizontalDevider = () => {
  return (
    <>
      <Divider my="sm" sx={{width: '100%'}} />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}