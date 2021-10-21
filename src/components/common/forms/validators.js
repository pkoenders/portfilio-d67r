export const isRequired = (value) => (value ? undefined : 'Required')

export function isValidEmail(value) {
  return /\S+@\S+\.\S+/.test(value) ? undefined : 'Invalid email address'
}

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined)
