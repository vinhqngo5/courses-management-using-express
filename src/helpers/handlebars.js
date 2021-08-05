const Handlebars = require("handlebars");

module.exports = {
  sum: (a, b) => a + b,
  sortable: (field, sort) => {
    // check if column in req.query is equal with table field
    const sortType =
      field === sort.column && ["asc", "desc"].includes(sort.type)
        ? sort.type
        : "default";

    const icons = {
      default: "oi oi-elevator",
      asc: "oi oi-sort-ascending",
      desc: "oi oi-sort-descending",
    };

    const nextTypes = {
      default: "desc",
      asc: "desc",
      desc: "asc",
    };
    const icon = icons[sortType];
    const nextType = nextTypes[sortType];

    const href = Handlebars.escapeExpression(
      `?_sort&column=${field}&type=${nextType}`
    );
    const output = `
    <a href="${href}">
      <span class="${icon}"></span>
    </a>
    `;

    return new Handlebars.SafeString(output);
  },
};
