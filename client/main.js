//import 'antd/dist/antd.css'
require('./assets/index.js');

// require('es5-shim');
// require('es5-shim/es5-sham');
require('babel-polyfill');
require('./assets/js/browserdetect.min.js');

import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import getRoutes from './routes/routes.js';
// import getStore from './redux/store.js';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// ReactDOM.render(
//   <MuiThemeProvider muiTheme={getMuiTheme()}>
//     <Provider store={getStore()}>
//       {getRoutes()}
//     </Provider>
//   </MuiThemeProvider>,
//     document.getElementById('content')
// );
//

ReactDOM.render(
      getRoutes(),
    document.getElementById('content')
);
