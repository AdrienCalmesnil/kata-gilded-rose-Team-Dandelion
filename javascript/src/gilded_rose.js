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
  //   if (this.items[id].quality > 0 && this.items[id].quality < 50) {
  //     this.items[id].quality = this.items[id].quality + changeValue;
  //   }
  // }

  // checkItem() {
  //   for (var i = 0; i < this.items.length; i++) {
  //     switch (this.items[i].name) {
  //       case "Sulfuras, Hand of Ragnaros":
  //         console.log("This is a legendary Item ! Don't touch !");
  //         break;
  //       case "Aged Brie":
  //         this.items[i].quality = this.items[i].quality - 2;

  //       case "Backstage passes to a TAFKAL80ETC concert" :

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

  updateQuality() {
    this.items.forEach((item) => {
      if (this.isQualityIncrease(item)) {
        if (this.qualityPositive(item)) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
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
          if (item.quality < 50) {
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
