import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const fetcher = (url: string) => http.get(url).then((res) => res.data);

// https://sapper-blog-app.vercel.app/blog/axios#axioscreate
// axios.create()はaxiosの設定を引数に受け取りaxiosのインスタンスを作成します。 このときaxios.create()に渡された設定はすべてのインスタンスでデフォルトの設定として引き継がれて使用されます。
