export const sidebarMenu = [
  [
    {
      id: 'insights',
      title: 'Insights',
      icon: {
        collection: 'hero',
        variant: 'outline',
        name: 'sparkles'
      },
      href: '/'
    }
  ],
  [
    {
      id: 'ap',
      title: 'Bills/Payables',
      icon: {
        collection: 'simple',
        variant: 'outline',
        name: 'payables'
      },
      href: '/bills',
      counter: 12
    },
    {
      id: 'vendors',
      title: 'Vendors',
      icon: {
        collection: 'simple',
        variant: 'outline',
        name: 'truck'
      },
      href: '/vendors'
    }
  ],
  [
    {
      id: 'ar',
      title: 'Invoices/Receivables',
      icon: {
        collection: 'simple',
        variant: 'outline',
        name: 'receivables'
      },
      href: '/',
      counter: 12
    },
    {
      id: 'customers',
      title: 'Customers',
      icon: {
        collection: 'simple',
        variant: 'outline',
        name: 'briefcase'
      },
      href: '/'
    }
  ],
  [
    {
      id: 'configurator',
      title: 'Configurator',
      icon: {
        collection: 'simple',
        variant: 'outline',
        name: 'adjustments'
      },
      href: '/'
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: {
        collection: 'simple',
        variant: 'outline',
        name: 'cog'
      },
      href: '/',
      childrens: [
        {
          id: 'business-details',
          title: 'Business details',
          icon: {
            collection: 'simple',
            variant: 'outline',
            name: 'office-building'
          },
          href: '/test1'
        },
        {
          id: 'user-management',
          title: 'User management',
          icon: {
            collection: 'simple',
            variant: 'outline',
            name: 'users'
          },
          href: '/test2'
        }
      ]
    }
  ]
] as const
