import 'vuestic-ui/css'
import { createVuestic, createIconsConfig} from 'vuestic-ui'
import './assets/main.css'
import { createApp } from 'vue'
import "material-design-icons-iconfont/dist/material-design-icons.min.css";
import App from './App.vue'

createApp(App).use(createVuestic(
    // {
    //     config: {
    //         components: {
    //             VaButton: {
    //               preset: "secondary",
    //               borderColor: "primary",
    //               size: "small",
    //             },
    //       colors: {
    //         variables: {
    //           // Default colors
    //           primary: "#23e066",
    //           secondary: "#002c85",
    //           success: "#40e583",
    //           info: "#2c82e0",
    //           danger: "#e34b4a",
    //           warning: "#ffc200",
    //           gray: "#babfc2",
    //           dark: "#34495e",
  
    //           // Custom colors
    //           yourCustomColor: "#d0f55d",
    //         },
    //         icons: createIconsConfig({
    //             aliases: [
    //               {
    //                 name: "bell",
    //                 color: "#FFD43A",
    //                 to: "fa4-bell",
    //               },
    //               {
    //                 name: "ru",
    //                 to: "flag-icon-ru small",
    //               },
    //             ],
    //             fonts: [
    //               {
    //                 name: "fa4-{iconName}",
    //                 resolve: ({ iconName }) => ({ class: `fa fa-${iconName}` }),
    //               },
    //               {
    //                 name: "flag-icon-{countryCode} {flagSize}",
    //                 resolve: ({ countryCode, flagSize }) => ({
    //                   class: `flag-icon flag-icon-${countryCode} flag-icon-${flagSize}`,
    //                 }),
    //               },
    //             ],
    //         })
    //       },
    //     },
    //   }
)).mount('#app')
