import * as marked from 'marked';

export const docsApiInput = {
  header: ['Name', 'Description', `Type`],
  body: {
    input: [
      {
        name: `config`,
        description: 'Define all properties with interface **FormElementInterface**.',
        type: `FormElementInterface`
      },
      {
        name: `form`,
        description: `@angular/forms **FormGroup** instance. When null instance will be automatically created inside component.`,
        type: `FormGroup`
      },
      {
        name: `model`,
        description: 'Manipulate model with specified **key**.',
        type: `Object`
      },
    ]
  }
};
