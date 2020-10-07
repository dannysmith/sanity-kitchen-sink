export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7e499b9620f7420de8d58a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9usv2ooh',
                  apiId: 'ad6f6949-9f08-45f2-beb0-07a581c3a562'
                },
                {
                  buildHookId: '5f7e499bc283474a80e04583',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-444jdeun',
                  apiId: '9c2d0b35-4494-426b-bd9a-e585179cfe78'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dannysmith/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-444jdeun.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
