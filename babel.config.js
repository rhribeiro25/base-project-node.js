export const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: 'current',
      },
    },
  ],
  '@babel/preset-typescript',
];
export const plugins = [
  [
    'module-resolver',
    {
      alias: {
        '@types/*': ['./src/@types/*'],
        '@models/*': ['./src/domain/models/*'],
        '@criptography/*': ['./src/data/protocols/criptography/*'],
        '@test/*': [
          './src/domain/test/*',
          './src/presentation/test/*',
          './src/validation/test/*',
        ],
        '@account': './src/domain/usecases/account',

        '@account': './src/infra/db/mongodb/account',

        '@account': './src/data/protocols/db/account',

        '@adapter/*': [
          './src/infra/criptography/bcrypt-adapter/*',
          './src/infra/criptography/jwt-adapter/*',
        ],
        '@helpers/*': ['./src/infra/db/mongodb/helpers/*'],
        '@log/*': ['./src/infra/db/mongodb/log/*'],
        '@validators/*': [
          './src/infra/validators/*',
          './src/validation/validators/*',
        ],
        '@main/*': ['./src/main/*'],
        '@adapters/*': ['./src/main/adapters/*'],
        '@config/*': ['./src/main/config/*'],
        '@decorators/*': ['./src/main/decorators/*'],
        '@docs/*': ['./src/main/docs/*'],
        '@factories/*': ['./src/main/factories/*'],
        '@middlewares/*': [
          './src/main/middlewares/*',
          './src/presentation/middlewares/*',
        ],
        '@routes/*': ['./src/main/routes/*'],
        '@login/*': ['./src/presentation/controllers/login/*'],
        '@signup/*': ['./src/presentation/controllers/signup/*'],
        '@errors/*': ['./src/presentation/errors/*'],
        '@http/*': ['./src/presentation/helpers/http/*'],
        '@protocols/*': [
          './src/validation/protocols/*',
          './src/presentation/protocols/*',
        ],
      },
    },
  ],
];
export const ignore = ['**/*.spec.ts'];
