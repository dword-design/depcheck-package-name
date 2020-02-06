import moduleName from 'module-name'

export default () => expect(moduleName`foo${1}`).toEqual('foo1')
