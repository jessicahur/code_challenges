/*Slight modification from http://www.mojavelinux.com/articles/javascript_hashes.html.
Hide 'items' instead of assign it as a field (closure)
*/
function HashTable(obj)
{
    this.length = 0;
    var items = {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            items[p] = obj[p];
            this.length++;
        }
    }

    this.setItem = function(key, value)
    {
        var previous = undefined;
        if (this.hasItem(key)) {
            previous = items[key];
        }
        else {
            this.length++;
        }
        items[key] = value;
        return previous;
    }

    this.getItem = function(key) {
        return this.hasItem(key) ? items[key] : undefined;
    }

    this.hasItem = function(key)
    {
        return items.hasOwnProperty(key);
    }

    this.removeItem = function(key)
    {
        if (this.hasItem(key)) {
            previous = items[key];
            this.length--;
            delete items[key];
            return previous;
        }
        else {
            return undefined;
        }
    }

    this.keys = function()
    {
        var keys = [];
        for (var k in items) {
            if (this.hasItem(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    this.values = function()
    {
        var values = [];
        for (var k in items) {
            if (this.hasItem(k)) {
                values.push(items[k]);
            }
        }
        return values;
    }

    this.each = function(fn) {
        for (var k in this.items) {
            if (this.hasItem(k)) {
                fn(k, this.items[k]);
            }
        }
    }

    this.clear = function()
    {
        items = {}
        this.length = 0;
    }
}

module.exports = HashTable;
