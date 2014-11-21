var Item = function(barcode, name, unit, price, count) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
    this.count = count || 1;
}

Item.prototype.isPromoted = function () {
  if (this.count < 2) {
    return false;
  }

  var barcode = this.barcode;
  var promotions = loadPromotions().filter(function(promotion) {
    return promotion.barcodes.contains(barcode);
  });

  return promotions && promotions.length ? true : false;
}

Item.prototype.realPrice = function() {
  return (this.price * this.realCount()).toFixed(2);
}

Item.prototype.realCount = function() {
  return this.isPromoted() ? (Math.ceil(this.count / 2)) : this.count;
}

Array.prototype.contains = function(barcode) {
  return this.indexOf(barcode) > -1;
}