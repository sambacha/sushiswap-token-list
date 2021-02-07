const formats = require('ajv-formats');
const Ajv = require('ajv').default;

const manifestSchema = require('./manifest.schema.json');

const createValidator = (schema, ajvOptions) => {
  const ajv = new Ajv(ajvOptions);
  formats(ajv); // Needed to support "uri"
  const validate = ajv.compile({
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...schema,
  });

  return (data) => {
    const valid = validate(data);
    return { value: data, error: !valid && validate.errors };
  };
};
const withTrimmer = (validator) => (data) =>
  validator(Object.prototype.toString.call(data) === '[object String]' ? data.trim() : data);

const manifest = createValidator(manifestSchema, {
  removeAdditional: true,
  useDefaults: true,
});
