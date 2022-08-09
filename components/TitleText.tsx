//unuse. 記述量少ないし直接使うのがよさそう
//作戦変更 コンテンツのテンプレートで使うことにした

import { Title } from '@mantine/core';

export const TitleText = () => {
  return (
    <>
      {/* <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title> */}
      <Title order={3}>This is h3 title</Title>
      {/* <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title> */}
    </>
  );
}

