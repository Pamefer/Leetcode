interface ChocolateOrder {
  type: string;
  cash: number;
  price: number;
  ratio: number;
}

interface ChocolateCount {
  [key: string]: number;
}

export default class ChocolatePromotion {
  static calculateBonus(
    chocolate: ChocolateOrder,
    quantityOfType: number
  ): number {
    return Math.floor(quantityOfType / chocolate.ratio);
  }

  static processOrder(order: ChocolateOrder): ChocolateCount {
    const quantityOfType = Math.floor(order.cash / order.price);
    const bonus = this.calculateBonus(order, quantityOfType);

    const chocolateCount: ChocolateCount = {};
    chocolateCount[order.type] = quantityOfType + bonus;

    if (order.type === "espresso") {
      chocolateCount["milk"] = bonus;
    }

    return chocolateCount;
  }
}
module.exports = {
  ChocolatePromotion,
};
const order = { type: "milk", cash: 12, price: 2, ratio: 5 };
const result = ChocolatePromotion.processOrder(order);
console.log(result);
// Testing
// describe('Chocolate Promotion', () => {
//     it('should correctly process milk chocolate order', () => {
//         const order: ChocolateOrder = { type: 'milk', cash: 12, price: 2, ratio: 5 };
//         const result = ChocolatePromotion.processOrder(order);
//         expect(result).toEqual({ milk: 7 });
//     });

//     it('should correctly process violet chocolate order', () => {
//         const order: ChocolateOrder = { type: 'violet', cash: 13, price: 4, ratio: 1 };
//         const result = ChocolatePromotion.processOrder(order);
//         expect(result).toEqual({ violet: 9 });
//     });

//     it('should correctly process espresso chocolate order', () => {
//         const order: ChocolateOrder = { type: 'espresso', cash: 6, price: 2, ratio: 2 };
//         const result = ChocolatePromotion.processOrder(order);
//         expect(result).toEqual({ espresso: 4, milk: 1 });
//     });
// });
