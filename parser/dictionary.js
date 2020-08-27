let present = [
  {
    codes: [200, 201, 202, 230, 231, 232, 233, 300, 301, 302, 500, 501, 502, 511, 520, 600, 601, 602, 611, 612, 621, 622, 623],
    prefix: "pada"
  },
  {
    codes: [521, 522, 610],
    prefix: "padaju"
  },
  {
    codes: [700, 721, 741, 751, 800, 802, 803, 804],
    prefix: "je"
  },
  {
    codes: [711],
    prefix: "je prisutan"
  },
  {
    codes: [731, 900],
    prefix: "su"
  },
  {
    codes: [801],
    prefix: "ima"
  },
];

let future = [
  {
    codes: [200, 201, 202, 230, 231, 232, 233, 300, 301, 302, 500, 501, 502, 511, 520, 521, 522, 600, 601, 602, 610, 611, 612, 621, 622, 623],
    prefix: "padaće"
  },
  {
    codes: [700, 721, 731, 741, 751, 800, 801, 802, 803, 804, 900],
    prefix: "biće"
  },
  {
    codes: [711],
    prefix: "biće prisutan"
  }
];

module.exports = {
  present,
  future
};
