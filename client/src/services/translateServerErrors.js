import _ from "lodash"
const translateServerErrors = (errors) => {
  let serializedErrors = {}
  Object.keys(errors).forEach((key) => {
    debugger
    const messages = errors[key].map((error) => {
      debugger
      const field = _.startCase(key)
      serializedErrors = {
        ...serializedErrors,
        [field]: error.message
      }
    })
  });
  debugger
  return serializedErrors
};

export default translateServerErrors