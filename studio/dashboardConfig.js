export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '633acc1fa39a495b3249546f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-uwgf7kx7',
                  apiId: '4f5b2eb5-c748-44da-b946-1fb37eb165a3'
                },
                {
                  buildHookId: '633acc20ab76de55286477d3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ey7998yx',
                  apiId: '2516f16a-f1df-4dc7-b74c-bc3678fe858c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/uwa234/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ey7998yx.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
