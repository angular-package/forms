// @ngx
import { NavigationInterface } from '@ngx-ui/navigation';

export const docs: NavigationInterface = {
  name: 'Documentation',
  // routerLink: '/docs',
  items: [
    {
      name: 'Api',
      routerLink: '/docs/api',
      items: [
        {
          icon: '',
          routerLink: '/docs/api/input',
          name: '@Input()',
          description: `Input decorator and metadata.`
        },
        {
          icon: '',
          routerLink: '/docs/api/output',
          name: '@Output()',
          description: `Output decorator and metadata.`,
          disabled: false
        },
        {
          icon: '',
          routerLink: '/docs/api/interface',
          name: 'Interface',
          description: 'Typescript interfaces used in @ngx-form package.',
          disabled: false
        },
        {
          icon: '',
          routerLink: '/docs/api/type',
          name: 'Type',
          description: 'Typescript types used in @ngx-form package',
          disabled: false
        }
      ]
    },
    {
      name: 'Form Element',
      routerLink: '/docs/element',
      items: [
        {
          icon: '',
          routerLink: '/docs/element/autocomplete',
          name: 'Autocomplete',
          description: `The autocomplete is a normal text input enhanced by a panel of suggested options.`,
          disabled: true
        },
        {
          icon: '',
          routerLink: '/docs/element/checkbox',
          name: 'Checkbox',
          description: `Provides the same functionality as a native <input type="checkbox">`,
          disabled: true
        },
        {
          icon: '',
          routerLink: '/docs/element/datepicker',
          name: 'Datepicker',
          description: `The datepicker allows users to enter a date either through text input, or by choosing a date from the calendar.`,
          disabled: true
        },
        {
          icon: '',
          image: `/assets/input.png`,
          routerLink: '/docs/element/input',
          name: 'Input',
          description: `Wrapper for native input and textarea elements. `
        },
        {
          icon: '',
          routerLink: '/docs/element/radio-button',
          name: 'Radio button',
          description: `Provides the same functionality as a native <input type="radio">.`,
          disabled: true
        },
        {
          icon: '',
          image: `/assets/select.png`,
          routerLink: '/docs/element/select',
          name: 'Select',
          description: `Form control for selecting a value from a set of options, similar to the native <select> element.`
        },
        {
          icon: '',
          routerLink: '/docs/element/slider',
          name: 'Slider',
          description: `allows for the selection of a value from a range via mouse, touch, or keyboard, similar to <input type="range">.`,
          disabled: true
        },
        {
          icon: '',
          routerLink: '/docs/element/slide-toggle',
          name: 'Slide toggle',
          description: `Is an on/off control that can be toggled via clicking or dragging.`,
          disabled: true
        }
      ]
    },
    {
      name: 'Native Script',
      routerLink: '/docs/nativescript',
      items: [
        {
          icon: '',
          routerLink: '/docs/nativescript/textfield',
          name: 'TextField',
          disabled: true
        }
      ]
    }
  ]
};
