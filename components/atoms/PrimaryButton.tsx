import { Button } from '@mantine/core';

type Props = {
  value: string,
}

export const PrimaryButton = (props:Props) => {
  return (
    <Button color="dark" radius="xl" >
      {props.value}
    </Button>
  );
}