$(document).ready(function () {
	var items = loadAllItems();
    var allPrice = 0;
	_(items).each(function (item) {
        var itemCount = cartStorage.getCount(item.barcode);
		if(itemCount > 0) {
            item.count = itemCount;
            allPrice += parseFloat(item.realPrice());
		    var listItem = $('<tr>\
                        <td>' + item.name + '</td>\
                        <td>' + item.price + '</td>\
                        <td>' + item.unit + '</td>\
                        <td>' + itemCount + '</td>\
                        <td>' + item.realPrice() + '</td>\
                      </tr>');

		    $('#inventory').append(listItem);
		}
    });

    $('#allPrice').text(allPrice);
});

