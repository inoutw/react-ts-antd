import HostOps from './HostOps'
const log: Module = {
  name: 'log',
  routes: [
    {
      name: '主机操作日志',
      path: '/log/host-ops',
      component: HostOps,
    },
  ],
}
export default log
