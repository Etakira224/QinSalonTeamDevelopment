import { MicroCMSListResponse } from "microcms-js-sdk";

export type BlogResponse = {
  id: string;
  title: string;
  description: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  publishedAt: string;
};

export type PortfolioResponse = {
  id: string;
  title: string;
  description: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  publishedAt: string;
};

export type BlogContent = MicroCMSListResponse<BlogResponse>;
export type PortfolioContent = MicroCMSListResponse<PortfolioResponse>;

//MicroCMSListResponseの型定義は以下のようになっています。これはmicroCMSのレスポンスの型定義となります。

// export interface MicroCMSListResponse<T> {
//   contents: (T & MicroCMSListContent)[];
//   totalCount: number;
//   limit: number;
//   offset: number;
// }
