$(document).ready(function () {
	var items = loadAllItems();

	_(items).each(function (item) {
        var itemCount = cartStorage.getCount(item.barcode);

		if(itemCount > 0) {
		  var listItem = $('<tr>\
                        <td>' + item.name + '</td>\
                        <td>' + item.price + '</td>\
                        <td>' + item.unit + '</td>\
                        <td>' + itemCount + '</td>\
                        <td>' + 'totalprice' + '</td>\
                      </tr>');

		  $('#inventory').append(listItem);
		}
    });
});