import { siteConfig } from './lib/site-config'

// - 1
export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '5d2517cb23954137aaff499c86eda234',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '一锅粥',
  domain: 'blog.xiqiu.top',
  author: '木頭',

  // open graph metadata (optional)
  description: '一锅粥，基于 notion 个人日常博客',

  // social usernames (optional)
  twitter: '',
  github: 'wangxian',
  linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Shuo',
      pageId: '449a5de2c22c425eabe48283fc02e7f3'
    },
    {
      title: 'About',
      pageId: 'df405e7f32ce404bb669b8c93e722bb5'
    },
    {
      title: 'Contact',
      pageId: 'e7d23d5633ae48648df37e676c977f2c'
    }
  ]
})
