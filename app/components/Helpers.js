function selectAll(e) {
  return e.target.select();
}

function maxminNumber(val, min, max) {
  if (val > max) {
    return max
  } else if (val < min) {
    return min
  } else {
    return val
  }
}

function setActive(elm) {
  return elm.currentTarget.classList.add('active');
}

function removeActive(elm) {
  return elm.currentTarget.classList.remove('active')
}

function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length-size);
}

export { selectAll, maxminNumber, setActive, removeActive, pad };
