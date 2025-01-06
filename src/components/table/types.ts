export type ColProps = Product | User;

export type Product =
  | {
      id: string;
      price: number;
      name: string;
      priceSale: number | null;
      coverUrl: string;
      colors: string[];
      status: string;
    }
  | unknown;

export type User =
  | {
      id: string;
      avatarUrl: string;
      name: string;
      copmany: string;
      isVerified: boolean;
      role: string;
      status: string;
    }
  | unknown;
