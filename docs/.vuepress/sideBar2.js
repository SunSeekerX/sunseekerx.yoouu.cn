module.exports = {
  zh: {
    '/zh/guide/': [
      {
        title: '快速上手',
        icon: 'creativefill',
        collapsable: false,
        children: ['', 'install'],
      },
      {
        title: '新增功能',
        icon: 'discoverfill',
        prefix: 'feature/',
        collapsable: false,
        children: [
          '',
          'theme',
          'page-info',
          'comment',
          'blog',
          'encrypt',
          {
            title: 'Markdown 增强',
            icon: 'markdown',
            prefix: 'markdown/',
            collapsable: false,
            children: [
              '',
              'align',
              'sup-sub',
              'footnote',
              'mark',
              'tex',
              'flowchart',
            ],
          },
          'component',
          'seoAndSitemap',
          'typescript',
        ],
      },
      {
        title: '布局',
        icon: 'layout',
        prefix: 'layout/',
        collapsable: false,
        children: ['', 'navbar', 'sidebar', 'page', 'home', 'blog'],
      },
    ],

    '/zh/config/': [
      '',
      'themeConfig',
      'page',
      'stylus',
      {
        title: '插件配置',
        icon: 'extension',
        prefix: 'plugin/',
        collapsable: false,
        children: ['', 'pwa', 'container', 'copyright'],
      },
    ],

    '/zh/basic/': [
      {
        title: 'Markdown',
        prefix: 'markdown/',
        icon: 'markdown',
        collapsable: false,
        children: [
          '',
          'demo',
          {
            title: 'Emoji',
            icon: 'emoji',
            path: 'emoji/',
            prefix: 'emoji/',
            collapsable: false,
            children: ['people', 'nature', 'object', 'place', 'symbol'],
          },
        ],
      },
      {
        title: 'Vuepress',
        prefix: 'vuepress/',
        icon: 'vue',
        collapsable: false,
        children: ['', 'file', 'plugin', 'theme', 'command', 'case'],
      },
    ],

    '/zh/': ['', 'guide/', 'config/', 'basic/', 'FAQ/', 'demo/'],
  },
  en: {
    '/guide/': [
      {
        title: 'Get Started',
        icon: 'creativefill',
        collapsable: false,
        children: ['', 'install'],
      },
      {
        title: 'New Features',
        icon: 'discoverfill',
        prefix: 'feature/',
        collapsable: false,
        children: [
          '',
          'theme',
          'page-info',
          'comment',
          'blog',
          'encrypt',
          {
            title: 'Markdown enhance',
            icon: 'markdown',
            prefix: 'markdown/',
            collapsable: false,
            children: [
              '',
              'align',
              'sup-sub',
              'footnote',
              'mark',
              'tex',
              'flowchart',
            ],
          },
          'component',
          'seoAndSitemap',
          'typescript',
        ],
      },
      {
        title: 'Outlook',
        icon: 'layout',
        prefix: 'layout/',
        collapsable: false,
        children: ['', 'navbar', 'sidebar', 'page', 'home', 'blog'],
      },
    ],

    '/config/': [
      '',
      'themeConfig',
      'page',
      'stylus',
      {
        title: 'Plugins',
        icon: 'extension',
        prefix: 'plugin/',
        collapsable: false,
        children: ['', 'pwa', 'container', 'copyright'],
      },
    ],

    '/basic/': [
      {
        title: 'Markdown',
        icon: 'markdown',
        prefix: 'markdown/',
        collapsable: false,
        children: [
          '',
          'demo',
          {
            title: 'Emoji',
            icon: 'emoji',
            path: 'emoji/',
            prefix: 'emoji/',
            collapsable: false,
            children: ['people', 'nature', 'object', 'place', 'symbol'],
          },
        ],
      },
      {
        title: 'Vuepress',
        icon: 'vue',
        prefix: 'vuepress/',
        collapsable: false,
        children: ['', 'file', 'plugin', 'theme', 'command', 'case'],
      },
    ],

    '/': ['', 'guide/', 'config/', 'basic/', 'FAQ/', 'demo/'],
  },
}
