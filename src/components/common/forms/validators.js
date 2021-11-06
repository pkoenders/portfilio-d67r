export const isRequired = (value) => (value ? undefined : 'required')

export function isValidEmail(value) {
  return /\S+@\S+\.\S+/.test(value) ? undefined : 'invalid'
}

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined)
