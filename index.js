const addDays = require("date-fns/addDays");

module.exports = function toAddDays(days) {
    let result = addDays(new Date(2020,7,22),days);
    const date = result.getDate();
    const month = result.getMonth()+1;
    const year = result.getFullYear();
    return `${date}-${month}-${year}`;
};