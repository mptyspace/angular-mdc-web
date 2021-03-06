import {Component, OnInit, ViewChild} from '@angular/core';

import {ComponentViewer} from '../../shared/component-viewer';

@Component({template: '<component-viewer></component-viewer>'})
export class ListDemo implements OnInit {
  @ViewChild(ComponentViewer, {static: true}) _componentViewer: ComponentViewer;

  ngOnInit(): void {
    this._componentViewer.template = {
      title: 'Lists',
      description: 'Lists are continuous, vertical indexes of text or images.',
      references: [{
        name: 'Material Design guidelines: Lists',
        url: 'https://material.io/design/components/lists.html'
      }, {
        name: 'Material Components Web',
        url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/README.md'
      }],
      code: `import {MdcListModule} from '@angular-mdc/web';`,
      sass: `@use '@material/list/mdc-list';
@use '@material/list';`
    };
  }
}

@Component({templateUrl: './api.html'})
export class Api {}

@Component({templateUrl: './sass.html'})
export class Sass {}

@Component({templateUrl: './examples.html'})
export class Examples {
  items = [
    {label: 'Wi-Fi', icon: 'network_wifi'},
    {label: 'Bluetooth', icon: 'bluetooth'},
    {label: 'Data Usage', icon: 'data_usage'}
  ];

  folders = [
    {name: 'Photos', icon: 'folder', addDate: 'Jan 9, 2015'},
    {name: 'Recipes', icon: 'folder', addDate: 'Jan 17, 2015'},
    {name: 'Work', icon: 'folder', addDate: 'Jan 28, 2015'}
  ];

  files = [
    {name: 'Vacation Itinerary', icon: 'insert_drive_file', addDate: 'Jan 10, 2015'},
    {name: 'Kitchen Remodel', icon: 'insert_drive_file', addDate: 'Jan 20, 2015'}
  ];

  //
  // Examples
  //

  exampleItemsArray = `items = [
  { label: 'Wi-Fi', icon: 'network_wifi'},
  { label: 'Bluetooth', icon: 'bluetooth'},
  { label: 'Data Usage', icon: 'data_usage'}
];`;

  exampleCustom = {
    html: `<mdc-list-group subheader="Folders">
  <mdc-list twoLine avatar class="demo-list--custom">
    <mdc-list-item *ngFor="let folder of folders">
      <mdc-icon mdcListItemGraphic>{{folder.icon}}</mdc-icon>
      <mdc-list-item-text [secondaryText]="folder.addDate">{{folder.name}}</mdc-list-item-text>
      <a href="#/list-demo/examples" mdcListItemMeta mdcIcon aria-label="View more" title="More info">info</a>
    </mdc-list-item>
    <mdc-list-divider inset></mdc-list-divider>
    <h3 mdcListGroupSubheader>Files</h3>
    <mdc-list-item *ngFor="let file of files">
      <mdc-icon mdcListItemGraphic>{{file.icon}}</mdc-icon>
      <mdc-list-item-text [secondaryText]="file.addDate">{{file.name}}</mdc-list-item-text>
      <a href="#/list-demo/examples" mdcListItemMeta mdcIcon aria-label="View more" title="More info">info</a>
    </mdc-list-item>
  </mdc-list>
</mdc-list-group>`,
    ts: `folders = [
  { name: 'Photos', icon: 'folder', addDate: 'Jan 9, 2015' },
  { name: 'Recipes', icon: 'folder', addDate: 'Jan 17, 2015' },
  { name: 'Work', icon: 'folder', addDate: 'Jan 28, 2015' }
];

files = [
  { name: 'Vacation Itinerary', icon: 'insert_drive_file', addDate: 'Jan 10, 2015' },
  { name: 'Kitchen Remodel', icon: 'insert_drive_file', addDate: 'Jan 20, 2015' }
];`,
    sass: `https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_list.scss`
  };

  exampleSingleLine = {
    html: `<mdc-list>
  <mdc-list-item>Single-line item</mdc-list-item>
  <mdc-list-item>Single-line item</mdc-list-item>
  <mdc-list-item disabled>Single-line item (disabled)</mdc-list-item>
  <mdc-list-item>Single-line item</mdc-list-item>
</mdc-list>`
  };

  exampleTwoLine = {
    html: `<mdc-list twoLine>
  <mdc-list-item>
    <mdc-list-item-text secondaryText="Secondary text">Single-line item</mdc-list-item-text>
  </mdc-list-item>
  <mdc-list-item>
    <mdc-list-item-text secondaryText="Secondary text">Single-line item</mdc-list-item-text>
  </mdc-list-item>
  <mdc-list-item>
    <mdc-list-item-text secondaryText="Secondary text">Single-line item</mdc-list-item-text>
  </mdc-list-item>
</mdc-list>`
  };

  exampleLeadingIcon = {
    html: `<mdc-list>
  <mdc-list-item>
    <mdc-icon mdcListItemGraphic>network_wifi</mdc-icon>Wi-Fi
  </mdc-list-item>
  <mdc-list-item>
    <mdc-icon mdcListItemGraphic>bluetooth</mdc-icon>Bluetooth
  </mdc-list-item>
  <mdc-list-item>
    <mdc-icon mdcListItemGraphic>data_usage</mdc-icon>Data Usage
  </mdc-list-item>
</mdc-list>`
  };

  exampleTrailingIcon = {
    html: `<mdc-list>
  <mdc-list-item>Wi-Fi
    <mdc-icon mdcListItemMeta>info</mdc-icon>
  </mdc-list-item>
  <mdc-list-item>Bluetooth
    <mdc-icon mdcListItemMeta>info</mdc-icon>
  </mdc-list-item>
  <mdc-list-item>Data Usage
    <mdc-icon mdcListItemMeta>info</mdc-icon>
  </mdc-list-item>
</mdc-list>`
  };

  exampleLeadingAndTrailingIcon = {
    html: `<mdc-list>
  <mdc-list-item>
    <mdc-icon mdcListItemGraphic>network_wifi</mdc-icon>Wi-Fi
    <mdc-icon mdcListItemMeta>info</mdc-icon>
  </mdc-list-item>
  <mdc-list-item>
    <mdc-icon mdcListItemGraphic>bluetooth</mdc-icon>Bluetooth
    <mdc-icon mdcListItemMeta>info</mdc-icon>
  </mdc-list-item>
  <mdc-list-item>
    <mdc-icon mdcListItemGraphic>data_usage</mdc-icon>Data Usage
    <mdc-icon mdcListItemMeta>info</mdc-icon>
  </mdc-list-item>
</mdc-list>`
  };

  exampleCheckListLeading = {
    html: `<mdc-list>
  <mdc-list-item>
    <mdc-checkbox></mdc-checkbox>
    Single-line item
  </mdc-list-item>
  <mdc-list-item>
    <mdc-checkbox></mdc-checkbox>
    Single-line item
  </mdc-list-item>
  <mdc-list-item>
    <mdc-checkbox></mdc-checkbox>
    Single-line item
  </mdc-list-item>
</mdc-list>`
  };

  exampleCheckListTrailing = {
    html: `<mdc-list>
  <mdc-list-item>
    Single-line item
    <mdc-checkbox mdcListItemMeta></mdc-checkbox>
  </mdc-list-item>
  <mdc-list-item>
    Single-line item
    <mdc-checkbox mdcListItemMeta></mdc-checkbox>
  </mdc-list-item>
  <mdc-list-item>
    Single-line item
    <mdc-checkbox mdcListItemMeta></mdc-checkbox>
  </mdc-list-item>
</mdc-list>`
  };

  exampleAvatars = {
    html: `<mdc-list avatar>
  <mdc-list-item>
    <mdc-icon mdcListItemGraphic>person</mdc-icon>Single-line item
  </mdc-list-item>
  <mdc-list-item>
    <mdc-icon mdcListItemGraphic>person</mdc-icon>Single-line item
  </mdc-list-item>
  <mdc-list-item>
    <mdc-icon mdcListItemGraphic>person</mdc-icon>Single-line item
  </mdc-list-item>
</mdc-list>`
  };

  exampleGroupLists = {
    html: `<mdc-list-group subheader="First Group">
  <mdc-list>
    <mdc-list-item>
      <mdc-icon mdcListItemGraphic>network_wifi</mdc-icon>Wi-Fi
      <mdc-icon mdcListItemMeta>info</mdc-icon>
    </mdc-list-item>
    <mdc-list-item>
      <mdc-icon mdcListItemGraphic>bluetooth</mdc-icon>Bluetooth
      <mdc-icon mdcListItemMeta>info</mdc-icon>
    </mdc-list-item>
    <mdc-list-item>
      <mdc-icon mdcListItemGraphic>data_usage</mdc-icon>Data Usage
      <mdc-icon mdcListItemMeta>info</mdc-icon>
    </mdc-list-item>
  </mdc-list>
  <mdc-list-divider></mdc-list-divider>
  <h3 mdcListGroupSubheader>Second Group</h3>
  <mdc-list avatar>
    <mdc-list-item>
      <mdc-icon mdcListItemGraphic>person</mdc-icon>Single-line item
    </mdc-list-item>
    <mdc-list-item>
      <mdc-icon mdcListItemGraphic>person</mdc-icon>Single-line item
    </mdc-list-item>
    <mdc-list-item>
      <mdc-icon mdcListItemGraphic>person</mdc-icon>Single-line item
    </mdc-list-item>
  </mdc-list>
</mdc-list-group>`
  };

  exampleShaped = {
    html: `<mdc-list class="demo-list--shaped" singleSelection>
  <mdc-list-item *ngFor="let item of items">
    <mdc-icon mdcListItemGraphic>{{item.icon}}</mdc-icon>
    {{item.label}}
  </mdc-list-item>
</mdc-list>`,
    ts: this.exampleItemsArray,
    sass: `https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_list.scss`
  };

  exampleRippleDisabled = {
    html: `<mdc-list disableRipple>
  <mdc-list-item *ngFor="let item of items">
    <mdc-icon mdcListItemGraphic>{{item.icon}}</mdc-icon>
    {{item.label}}
  </mdc-list-item>
</mdc-list>`,
    ts: this.exampleItemsArray
  };

  exampleTwoLineLeadingTrailing = {
    html: `<mdc-list avatar twoLine>
  <mdc-list-item>
    <mdc-icon mdcListItemGraphic>folder</mdc-icon>
    <mdc-list-item-text secondaryText="Secondary text">Single-line item</mdc-list-item-text>
    <mdc-icon mdcListItemMeta>info</mdc-icon>
  </mdc-list-item>
  <mdc-list-item>
    <mdc-icon mdcListItemGraphic>folder</mdc-icon>
    <mdc-list-item-text secondaryText="Secondary text">Single-line item</mdc-list-item-text>
    <mdc-icon mdcListItemMeta>info</mdc-icon>
  </mdc-list-item>
  <mdc-list-item>
    <mdc-icon mdcListItemGraphic>folder</mdc-icon>
    <mdc-list-item-text secondaryText="Secondary text">Single-line item</mdc-list-item-text>
    <mdc-icon mdcListItemMeta>info</mdc-icon>
  </mdc-list-item>
</mdc-list>`
  };
}
