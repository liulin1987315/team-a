var cartStorage = (function() {
    return {
        setCount: function(key) {
            localStorage.setItem(key, this.getCount(key) + 1);
        },
        getCount: function(key) {
            return parseInt(localStorage.getItem(key)) || 0;
        }
    }
})();