import loadable from '@/components/loadable.js'
//room
const RoomIndex = loadable(() => import('@/pages/Room/Room/Index.js'))
//host
const HostIndex = loadable(() => import('@/pages/Host/Host/Index.js'))
const transIndex = loadable(() => import('@/pages/Host/Trans/Index.js'))
//business
const BusinessIndex = loadable(() => import('@/pages/Busy/Business/Index.js'))
//log
const LogIndex = loadable(() => import('@/pages/Log/Log/Index.js'))
export default [
  //base
  {
    path:"/pages/room",
    component:RoomIndex,//主机机房
  },
  {
    path:"/pages/host",
    component:HostIndex,//pc主机
  },
  {
    path:"/pages/trans",
    component:transIndex,//传输设置
  },
  {
    path:"/pages/business",
    component:BusinessIndex,//订单列表
  },
  //opLog
  {
    path:"/pages/log",
    component:LogIndex,//日志查询
  }
]