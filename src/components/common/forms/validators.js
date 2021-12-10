export const isRequired = (value) => (value ? undefined : 'Is required')

export function isValidEmail(value) {
  return /\S+@\S+\.\S+/.test(value) ? undefined : 'Email address is invalid'
}

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined)
