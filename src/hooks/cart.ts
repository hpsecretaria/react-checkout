import { useMemo } from "react";

import { Item } from "./../models/item";
import { Discount, PricingRule, PricingType } from "./../models/pricingRule";
import {
  addItem as addItemToCart,
  removeItem as remoteItemFromCart,
} from "../stores/cart";
import { useAppDispatch, useAppSelector } from "./index";

export const useCart = (pricingRules: PricingRule[]) => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  function addItem(item: Item) {
    dispatch(addItemToCart(item));
  }

  function removeItem(item: Item) {
    dispatch(remoteItemFromCart(item));
  }

  const discounts = useMemo<Discount[]>(() => {
    const discounts: Discount[] = [];
    pricingRules.forEach((c) => {
      const item = cartItems.find((d) => d.item.SKU === c.item.SKU);
      let name = "";
      let discount = 0;
      switch (c.pricingType) {
        case PricingType.BULKDISCOUNT:
          if (item && item.quantity > c.quantity) {
            discount = item.quantity * (c.discount.discount || 0);
            name = `${c.discount.name} - (${c.discount.discount || 0} * ${
              item.quantity
            })`;
          }
          break;

        case PricingType.BUNDLE:
          if (item && Math.floor(item.quantity / c.quantity) >= 1) {
            name = `${c.discount.name} - (${Math.floor(
              item.quantity / c.quantity
            )} * ${c.discount.freebies.map((c) => c.name).join(", ")})`;
            discount =
              Math.floor(item.quantity / c.quantity) *
              (c.discount.discount || 0);
          }
          break;

        case PricingType.NFORMDEAL:
          if (item && Math.floor(item.quantity / c.quantity) >= 1) {
            name = `${c.discount.name} - (${Math.floor(
              item.quantity / c.quantity
            )} * ${c.discount.discount})`;
            discount =
              Math.floor(item.quantity / c.quantity) *
              (c.discount.discount || 0);
          }
          break;

        default:
          break;
      }

      discounts.push({ ...c.discount, name, discount });
    });

    return discounts;
  }, [cartItems, pricingRules]);

  const total = useMemo<string>(() => {
    return (
      cartItems
        .map((c) => c.item.price * c.quantity)
        .reduce((a, b) => a + b, 0) -
      discounts.map((c) => c.discount || 0).reduce((a, b) => a + b, 0)
    ).toFixed(2);
  }, [cartItems, discounts]);

  return {
    addItem,
    removeItem,
    cartItems,
    total,
    discounts,
  };
};
