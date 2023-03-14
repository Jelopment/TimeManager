module.exports = {
  packagerConfig: {
    // icon: './src/assets/logo-windows.ico' // Windows
    // icon: './src/assets/logo-macos.icns // MacOS without Retina Display
    // icon: './src/assets/logo-macos-retina.icns // MacOS with Retina Display
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        /*options: {
          icon: './src/assets/logo-linux.png'
        }*/ // Debian based Linux
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        /* options: {
          icon: './src/assets/logo-linux.png'
        } */ // RedHat based Linux
      },
    },
  ],
};
