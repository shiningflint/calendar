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

export { selectAll, maxminNumber, setActive, removeActive };
