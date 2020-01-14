import Demo1Page from './Demo1Page'

const demoModule: Module = {
  name: 'demo',
  routes: [
    {
      name: '演示',
      path: '/demo/demo1',
      component: Demo1Page,
    },
  ],
}
export default demoModule
