import { Item } from "./item";

export enum PricingType {
  NFORMDEAL = "nformdeal",
  BULKDISCOUNT = "bulkdiscount",
  BUNDLE = "bundle",
}

export type PricingRule = {
  pricingType: PricingType;
  item: Item;
  quantity: number;
  discount: Discount;
};

export type Discount = {
  name: string;
  discount?: number;
  freebies: Item[];
};
