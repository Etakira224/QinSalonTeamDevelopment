import { Card, Text, Title } from "@mantine/core";
import { Layout } from "../components/templates/Layout"

function About() {
  return (
    //現在直打ちにしてあるけど、最終的には各ユーザーの情報をとってこられるように。
    <Layout>
      <section>
        <Title order={2}>About</Title>
        <Card>
          <article>
          <Title order={3}>Lightsound Shimabu</Title>
          <Text>ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。</Text>
          </article>
        </Card>
      </section>
    </Layout>
  )
}

export default About;