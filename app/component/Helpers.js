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

export { selectAll, maxminNumber };
