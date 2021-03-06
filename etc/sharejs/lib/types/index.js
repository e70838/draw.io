var register;

register = function(file) {
  var type;
  type = require(file);
  exports[type.name] = type;
  try {
    return require("" + file + "-api");
  } catch (_error) {}
};

register('./simple');

register('./count');

register('./text');

register('./text-composable');

register('./text-tp2');

register('./json');
