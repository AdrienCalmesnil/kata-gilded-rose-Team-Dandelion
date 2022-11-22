class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  /*
  /!\ Do not change code above this line /!\
  */

  // changeQuality(id, changeValue) {
  //   if (this.items[id].quality < 50) {
  //     this.items[id].quality = this.items[id].quality + changeValue;
  //   }
  // }

  // updateQuality2() {
  //   for (var i = 0; i < this.items.length; i++) {
  //     switch (this.items[i].name) {
  //       case "Sulfuras, Hand of Ragnaros":
  //         console.log("This is a legendary Item ! Don't touch !");
  //         break;
  //       case "Aged Brie":
  //         this.items[i].quality = this.items[i].quality + 2;
  //         break;
  //       case "Backstage passes to a TAFKAL80ETC concert":
  //         if (this.items[i].sellIn < 11) {
  //           this.changeQuality(i, 1)
  //         }
  //         if (this.items[i].sellIn < 6) {
  //           this.changeQuality(i, 1)
  //         }
  //         break;
  //       default:
  //         this.items[i].quality = this.items[i].quality - 1;
  //     }
  //   }
  // }

  isQualityIncrease(item) {
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      return true;
    }
    return false;
  }

  qualityPositive(item) {
    return item.quality > 0;
  }

  isSulfuras(item) {
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      item.quality = item.quality - 1;
    }
  }

  qualityIsBelow50(item) {
    return item.quality < 50;
  }
  isBackstagePasses(item) {
    return item.name == "Backstage passes to a TAFKAL80ETC concert";
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (this.isQualityIncrease(item)) {
        if (this.qualityPositive(item)) {
          this.isSulfuras(item);
        }
      } else {
        if (this.qualityIsBelow50(item)) {
          item.quality = item.quality + 1;
          if (this.isBackstagePasses(item)) {
            if (item.sellIn < 11) {
              if (this.qualityIsBelow50(item)) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (this.qualityIsBelow50(item)) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != "Aged Brie") {
          if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
            if (item.quality > 0) {
              if (item.name != "Sulfuras, Hand of Ragnaros") {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (this.qualityIsBelow50(item)) {
            item.quality = item.quality + 1;
          }
        }
      }
    });

    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
};
