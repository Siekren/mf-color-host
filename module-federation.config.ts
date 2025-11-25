export const mfConfig = {
  name: "host",
  remotes: {
    colorPicker: "mf_color_picker@https://mf-colors.netlify.app/remoteEntry.js",
    colorList: "mf_color_list@https://color-list.netlify.app/remoteEntry.js"
  },
  exposes: {},
  shared: {
    react: {
      singleton: true,
      requiredVersion: '^18.3.1',
    },
    'react-dom': {
      singleton: true,
      requiredVersion: '^18.3.1',
    },
  },
  dts: {
    remotes: {
        colorPicker: 'http://localhost:3001',
        colorList: 'http://localhost:3002'
    },
    generateTypes: true, 
    tsConfigPath: './tsconfig.json',
  },
};
