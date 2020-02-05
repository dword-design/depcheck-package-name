import moduleName from 'module-name'
import expect from 'expect'

export default () => {
  expect(moduleName`foo${1}`).toEqual('foo1')
  expect(moduleName`foo${1}`).toEqual('foo1')
}
