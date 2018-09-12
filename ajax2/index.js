let XHR = function() {
  let fns = [function() {
    return new XMLHttpRequest(); //ie7+ firefox chrome opera safari
  }, function() {
    return new ActiveXObject("Msxml2.XMLHTTP"); //ie5 ie6
  }, function() {
    return new ActiveXObject("Msxml3.XMLHTTP"); //ie5 ie6
  }, function() {
    return new ActiveXObject("Microsoft.XMLHTTP"); //ie5 ie6
  }];
  let val;
  for (let i = 0; i < fns.length; i++) {
    try {
      val = fns[i]();
    } catch (e) {
      continue;
    }
    XHR = fns[i];
    break;
  }
  return val;
};