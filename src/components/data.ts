import { PricingRule, PricingType } from "./../models/pricingRule";
import { Item } from "./../models/item";

function createData(SKU: string, name: string, price: number): Item {
  return { SKU, name, price };
}

export const productData: Item[] = [
  createData("ipd", "Super iPad", 549.99),
  createData("mbp", "MacBook Pro", 1399.99),
  createData("atv", "Apple TV", 109.5),
  createData("vga", "VGA adapter", 30.0),
];

export const pricingRules: PricingRule[] = [
  {
    pricingType: PricingType.NFORMDEAL,
    item: productData[2],
    quantity: 3,
    discount: {
      name: "3-for-2 deal on Apple TV",
      discount: 109.5,
      freebies: [],
    },
  },
  {
    pricingType: PricingType.BULKDISCOUNT,
    item: productData[0],
    quantity: 4,
    discount: {
      name: "Super Ipad Bulk Discount",
      discount: 50,
      freebies: [],
    },
  },
  {
    pricingType: PricingType.BUNDLE,
    item: productData[1],
    quantity: 1,
    discount: {
      name: "VGA Adapter Free",
      discount: 30,
      freebies: [productData[3]],
    },
  },
];
