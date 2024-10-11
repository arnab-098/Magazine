export interface Pdf {
  description: string;
  magazine_pdf: {
    asset: {
      _id: string;
      url: string;
    };
  };
  _id: string;
  thumbnail: {
    asset: {
      url: string;
    };
  };
  postedBy: {
    _id: string;
    userName: string;
    image: string;
  };
  likes: {
    postedBy: {
      _id: string;
      userName: string;
      image: string;
    };
  }[];
  review: {
    review: string;
    _key: string;
    postedBy: {
      _ref: string;
    };
  }[];
  userId: string;
}

declare module "*.pdf";
