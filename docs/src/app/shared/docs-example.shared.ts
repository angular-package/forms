// import { extended, simple } from './input-data.shared';
export const docsExample = {
  google: {
    html: `
<form [formGroup]="form">
  <ngx-form-element
    [config]="{
      attributes: {
        placeholder: 'Company (disabled)',
        disabled: true,
        type: 'text'
      },
      element: 'input',
      key: 'company'
    }"
    [form]="form"
    [model]="rows[0]"></ngx-form-element>

  <table class="example-full-width" cellspacing="0">
    <tr>
      <td>
      <ngx-form-element
        [config]="{
          attributes: {
            disabled: false,
            placeholder: 'First name',
            type: 'text'
          },
          element: 'input',
          key: 'firstname'
        }"
        [form]="form"
        [model]="rows[0]"></ngx-form-element>
      </td>
      <td>
        <ngx-form-element
          [config]="{
            attributes: {
              disabled: false,
              placeholder: 'Long Last Name That Will Be Truncated',
              type: 'text'
            },
            element: 'input',
            key: 'lastname'
          }"
          [form]="form"
          [model]="rows[0]"></ngx-form-element>
      </td>
    </tr>
  </table>

  <p>
    <md-input-container class="example-full-width">
      <textarea mdInput placeholder="Address">1600 Amphitheatre Pkwy</textarea>
    </md-input-container>
    <md-input-container class="example-full-width">
      <textarea mdInput placeholder="Address 2"></textarea>
    </md-input-container>
  </p>

  <table class="example-full-width" cellspacing="0">
    <tr>
      <td>
        <ngx-form-element
          [config]="{
            attributes: {
              disabled: false,
              placeholder: 'City',
              type: 'text'
            },
            element: 'input',
            key: 'city'
          }"
          [form]="form"
          [model]="rows[0]"></ngx-form-element>
      </td>
      <td>
        <ngx-form-element
          [config]="{
            attributes: {
              placeholder: 'State',
              disabled: false,
              type: 'text'
            },
            element: 'input',
            key: 'state'
          }"
          [form]="form"
          [model]="rows[0]"></ngx-form-element>
      </td>
      <td>
        <ngx-form-element
          [config]="{
            attributes: {
              disabled: false,
              placeholder: 'Postal Code',
              maxlength: 5,
              type: 'text'
            },
            mdHint: {
              end: 'maxlength'
            },
            element: 'input',
            key: 'postalcode'
          }"
          [form]="form"
          [model]="rows[0]"></ngx-form-element>
      </td>
    </tr>
  </table>
</form>
    `,
    ts: ``,
    css: `/** No CSS for this example */`
  },
  simple: {
    html: `
<ngx-form-element
  [form]="form"
  [model]="rows[0]"
  [config]="simple[0]"
  (changed)="onSubmit($event)"
  (created)="created($event)"
  (destroyed)="destroyed($event)"
></ngx-form-element>
    `,
    ts: ``,
    css: `/** No CSS for this example */`
  },
  extended: {
    html: `
<ngx-form-element
  [form]="form"
  [model]="rows[0]"
  [config]="simple[0]"
  (changed)="onSubmit($event)"
  (created)="created($event)"
  (destroyed)="destroyed($event)"
></ngx-form-element>
    `,
    ts: ``,
    css: `/** No CSS for this example */`
  },
}
