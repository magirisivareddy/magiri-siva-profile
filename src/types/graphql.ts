export interface Block {
  __typename?: string;
  id: string;
  [key: string]: any;
}

export interface HomeData {
  home: {
    seo?: {
      description?: string;
      metaTitle?: string;
    };
    Blocks?: Block[];
  };
}

export interface HomeQueryResponse {
  home?: {
    seo?: {
      description?: string;
      metaTitle?: string;
    };
    Blocks?: Block[];
  };
}
