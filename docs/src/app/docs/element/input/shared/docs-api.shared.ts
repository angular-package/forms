export const docsApi = {
  header: ['Name', 'Description', `Type`, 'Values'],
  body: {
    input: [
      {
        name: `config`,
        description: 'Define all properties with interface <b>FormElementInterface</b>.',
        type: `FormElementInterface`
      },
      {
        name: `form`,
        description: `
        @angular/forms <b>FormGroup</b> instance. When null instance will be automatically created inside component.
        `,
        type: `FormGroup`
      },
      {
        name: `model`,
        description: 'Model to manipulate with specified <b>key</b>.',
        type: `Object`
      },
    ],
    output: [
      {
        name: 'cancelled',
        description: 'Event is emitted when `Escape` key is pressed.',
        type: `EventEmitter`
      },
      {
        name: 'changed',
        description: 'Event is emitted when model changed.',
        type: `EventEmitter`
      },
      {
        name: 'created',
        description: `
        Event with value <b>true</b> is emitted after creation <b>__component</b> instance and all properties are assigned.
        <br />
        The same time event <b>destroyed</b> with value <b>false</b> is emitted.
        `,
        type: `EventEmitter`
      },
      {
        name: 'destroyed',
        description: `
        Event with value <b>true</b> is emitted after \`__component\` instance is destroyed and removed FormGroup control.
        <br />
        The same time event <b>created</b> with value <b>false</b> is emitted.
        `,
        type: `EventEmitter`
      },
      {
        name: 'submitted',
        description: 'Event is emitted with FormGroup <b>model</b> after submit form.',
        type: `EventEmitter`
      }
    ],

    // CONFIG
    config: [
      {
        name: 'attributes',
        description: 'Html and also some specific angular material <b>attributes</b> used in template.',
        type: `
          MdInputAttributesInterface
          <br />
          MdInputContainerInterface
        `
      },
      {
        name: 'destroy?',
        description: `
        Automatically destroy form element instance on the following events:<br />
          - <strong>onCancelled</strong>,<br />
          - <strong>onChanged</strong>,<br />
          - <strong>onSubmit</strong>
        `,
        type: `DestroyInterface`
      },
      {
        name: 'element',
        description: `
          Form element name based on <b>element</b> type from <b>@ngx-form/type</b> for example 'input', 'select'.
        `,
        type: `element`
      },
      {
        name: 'focus?',
        description: 'Focus form element if value <b>true</b>.',
        type: `boolean`
      },
      {
        name: 'key',
        description: 'Location to data in <b>model</b>.',
        type: 'string'
      },
      {
        name: 'label?',
        description: 'Form element label usually in label tag.',
        type: `string`
      },
      {
        name: 'options?',
        description: ''
      },
      {
        name: 'validators?',
        description: ''
      },
      {
        name: 'viewValue?',
        description: ''
      }
    ],

    // CONFIG ATTRIBUTES
    configAttributes: [
      {
        name: 'accesskey?',
        description: `
        A key label or list of key labels with which to associate the element; <br />
        each key label represents a keyboard shortcut which UAs can use to activate the element or give focus to the element.`,
        type: `accesskey`,
        values: 'string'
      },
      { name: 'autocomplete?', description: '', type: `autocomplete`, values: ` 'on' | 'off' ` },
      { name: 'autofocus?', description: '', type: `autofocus`, values: `'autofocus' | '' | boolean` },
      {
        name: 'class?',
        description: `A name of a classification, or list of names of classifications, to which the element belongs.`,
        type: `classType`,
        values: 'string'
      },
      {
        name: 'contenteditable?',
        description: 'Specifies whether the contents of the element are editable.',
        type: `contenteditable`,
        values: `'true' | 'false' | '' | undefined`
      },
      { name: 'contextmenu?', description: '', type: `contextmenu`, values: 'string' },
      { name: 'dir?', description: '', type: `dir`, values: `'ltr' | 'rtl' | 'auto' | undefined` },
      { name: 'dragabble?', description: '', type: `dragabble`, values: `'true' | 'false' | true | false` },
      { name: 'dropzone?', description: '', type: `dropzone`, values: `'copy' | 'move' | 'link' | string` },
      { name: 'disabled?', description: '', type: `disabled`, values: `'disabled' | '' | boolean` },
      { name: 'hidden?', description: '', type: `hidden`, values: `'hidden' | '' | undefined` },

      { name: 'id?', description: '', type: `id`, values: `string` },
      { name: 'lang?', description: '', type: `lang`, values: `string` },
      { name: 'max?', description: '', type: `max`, values: `string` },
      { name: 'min?', description: '', type: `min`, values: `string` },
      { name: 'maxlength?', description: '', type: `maxlength`, values: `number` },
      { name: 'minlength?', description: '', type: `number`, values: `number` },
      { name: 'name?', description: '', type: `name`, values: `string` },
      { name: 'pattern?', description: '', type: `string`, values: `string` },
      { name: 'placeholder?', description: '', type: `placeholder`, values: `string` },
      { name: 'readonly?', description: '', type: `readonly`, values: `'readonly' | '' | boolean` },
      { name: 'required?', description: '', type: ``, values: `'required' | '' | boolean` },
      { name: 'spellcheck?', description: '', type: `spellcheck`, values: `'true' | 'false' | boolean | '' | undefined` },
      { name: 'step?', description: '', type: `step`, values: `number` },
      { name: 'style?', description: '', type: `style`, values: `string` },
      { name: 'tabindex?', description: '', type: `tabindex`, values: `number` },
      { name: 'translate?', description: '', type: `translate`, values: `'yes' | 'no'` },
      { name: 'title?', description: '', type: `title`, values: `any` },
      {
        name: 'type?', description: '', type: `input`, values: `
'button' | 'color' | 'checkbox' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'file' | 'hidden' |
  'image' | 'month' | 'number' | 'password' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
        ` },
      { name: 'value?', description: '', type: `value`, values: `string` },
    ]
  }
};
