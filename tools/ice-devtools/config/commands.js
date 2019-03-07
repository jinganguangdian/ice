module.exports = {
  init: {
    desc: 'generate a new project from a template',
    options: [
      {
        name: '--offline',
        desc: 'use cached template',
      },
      {
        name: '--local-template [template]',
        desc: 'use local template'
      },
      {
        name: '--template [template]',
        desc: 'use npm template'
      }
    ],
  },
  add: {
    desc: 'add a new block/scaffold from a official templates',
    options: [
      {
        name: '--framework [framework]',
        desc: 'materail framework, e.g. react/vue',
      },
      {
        name: '--type [type]',
        desc: 'materail type, e.g. block/component/scaffold',
      }
    ],
  },
  start: {
    desc: 'Start Dev Server',
    options: [
      {
        name: '-p --port [port]',
        desc: 'start port',
      },
      {
        name: '--analyzer',
        desc: 'bunlde analyzer',
      }
    ],
  },
  build: {
    desc: 'Build Component',
    options: [
      {
        name: '--analyzer',
        desc: 'bunlde analyzer',
      },
    ],
  },
  screenshot: {
    desc: 'Create screenshot.png',
  },
  generate: {
    desc: 'Generate materials json',
  },
  sync: {
    desc: 'Sync materials json to https://fusion.design',
  },
  'sync-unpkg': {
    desc: 'Sync materials json to https://unpkg.com'
  },
  clear: {
    desc: 'Clear cache data',
  },
};
