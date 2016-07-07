/*jshint esversion:6*/

const filter = (model, fields) => {
  let data = {};
  fields.forEach((field)=> {
    data[field] = model[field];
  });
  return data;
};

module.exports = filter;
