export function expectHasError(errors: Error[]) {
  return expect(errors.length).toBeGreaterThan(0);
}

export function expectUnauthorized(errors: Error[]) {
  expectHasError(errors);
  expect(errors[0].message).toEqual('Unauthorized');
}
