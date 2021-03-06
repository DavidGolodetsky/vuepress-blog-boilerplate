const currentDateUTC = new Date().toUTCString();

module.exports = {
  title: 'DavidGo',
  dest: './public',
  themeConfig: {
    // repo: 'https://github.com/DavidGolodetsky/vuepress-blog-boilerplate',
    // repoLabel: 'Repo',
    editLinks: true,
    // editLinkText: 'Found a bug? Help me improve this page!',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Archive', link: '/archive/' },
    ],
    logo: '/pencil.svg',
    docsDir: 'src',
    pageSize: 5,
    startPage: 0,
  },
  plugins: [
    'vuepress-plugin-reading-time',
    'vuepress-plugin-janitor',
    'social-share',
    '@vuepress/back-to-top',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-164288436-1',
      },
    ],
    [
      {
        base_url: '/',
        site_url: 'https://vuepressblog.org',
        filter: (frontmatter) => frontmatter.date <= new Date(currentDateUTC),
        count: 20,
      },
    ],
  ],
  head: [
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' },
    ],
    ['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    [
      'link',
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
};
