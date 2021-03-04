const path = require('path')

const options = {
  propFilter: (prop, component) => {
    if (prop.parent) {
      return !prop.parent.fileName.includes('node_modules')
    }

    return true
  }
}

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [
              // we need to set the runtime to 'classic' here to tailwinds works
              'next/babel'
            ]
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.mdx?$/,
          use: ['babel-loader', '@mdx-js/loader']
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader']
        }
      ]
    }
  },
  title: 'DevBlog',
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    options
  ).parse,
  require: [
    path.join(__dirname, 'src/styles/globals.css'),
    path.join(__dirname, 'src/styles/tailwind.css'),
    path.join(__dirname, 'src/styles/fonts.css'),
    path.join(__dirname, 'src/styles/cube.css')
  ],
  theme: {
    color: {
      link: '#065fd4',
      linkHover: '#00adef'
    },
    font: ['Helvetica', 'sans-serif']
  },
  styles: {
    Ribbon: {
      root: {
        backgroundImage:
          'url("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")',
        backgroundSize: '50px 50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top'
      },
      link: {
        backgroundColor: '#065fd4'
      }
    },
    Heading: {
      heading2: {
        fontSize: 26
      }
    },
    ReactComponent: {
      root: {
        marginBottom: 20
      },
      header: {
        marginBottom: 0
      },
      tabs: {
        marginBottom: 0
      }
    }
  },
  ribbon: {
    url: 'https://github.com/elijahboston/devblog',
    text: 'Fork me on GitHub'
  },
  template: {
    head: {
      links: [
        {
          href: 'https://fonts.gstatic.com',
          rel: 'preconnect'
        },
        {
          href:
            'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&family=Source+Serif+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap',
          rel: 'stylesheet'
        }
      ]
    }
  },
  sections: [
    {
      name: 'Atoms',
      content: 'docs/atoms.md',
      components: 'src/components/atoms/**/*.tsx'
    },
    {
      name: 'Molecules',
      content: 'docs/molecules.md',
      components: 'src/components/molecules/**/*.tsx'
    },
    {
      name: 'Organisms',
      content: 'docs/organisms.md',
      components: 'src/components/organisms/**/*.tsx'
    },
    {
      name: 'Templates',
      content: 'docs/templates.md',
      components: 'src/components/templates/**/*.tsx'
    },
    {
      name: 'Typography',
      content: 'docs/typography.md'
    }
  ],
  showSidebar: true,
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  styleguideDir: 'static'
}
