import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiSquareEditOutline,
  mdiViewList
} from '@mdi/js'

export default [
  ' ',
  [
    {
      to: '/',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    },
    {
      to: '/c',
      icon: mdiAccountCircle,
      label: 'Customers'
    },
    {
      to: '/t',
      icon: mdiViewList,
      label: 'Transactions'
    },
    {
      to: '/r',
      icon: mdiSquareEditOutline,
      label: 'Reports'
    }
  ]
]
