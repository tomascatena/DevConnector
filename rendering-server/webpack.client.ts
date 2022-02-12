import path from 'path';
import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base';

const config: Configuration = {
  // Tell webpack the root file of our server application
  entry: './src/client/client.tsx',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

export default merge(baseConfig, config);
