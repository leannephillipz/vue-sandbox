export default {
  uppercase(val) {
    return val.toUpperCase();
  },
  accending(data) {
    return val.toUpperCase();
  },
  money(val) {
    if (typeof val === "numeric") {
            return "$" + val.toFixed(2);
        }
  }
};
