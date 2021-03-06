var $ = require('jquery')
var tinymce = require('tinymce')
var gridFactory = require('./grid')
var gridPrimary = new gridFactory()
var gridSecondary = new gridFactory()

gridPrimary.create({
  id: 'primary',
  perPageOptions: [10, 25, 50, 100, 200],
  url: {
    read: 'request/grid-primary/read.php'
  },
  onSelectCell: function(config) {},
  onSelectRow: function(config) {},
  cols: [
    {
      width: 5,
      key: 'id',
      name: 'ID',
      primaryKey: true,
      search: true,
      order: true,
      readTemplate: '<a href="#" class="link">{{.}}</a>'
    },
    {
      width: 15,
      search: true,
      key: 'sku',
      name: 'SKU',
      order: true,
      type: 'text',
      required: true
    },
    {
      width: 25,
      order: true,
      type: 'text',
      key: 'name',
      name: 'Name',
      required: true
    },
    {
      width: 10,
      order: true,
      type: 'number',
      key: 'stock',
      name: 'Stock'
    },
    {
      width: 10,
      order: true,
      search: true,
      key: 'status',
      name: 'Status',
      selectOptions: {
        Current: 'Current',
        Dropship: 'Dropship',
        Discontinued: 'Discontinued',
        Obsolete: 'Obsolete'
      }
    },
    {
      width: 10,
      key: 'supplier',
      name: 'Supplier',
      search: true,
      selectOptions: {
        16: 'China',
        2: 'Burnley',
      }
    },
    {
      width: 10,
      key: 'requiresCount',
      name: 'Rq Count',
      search: true,
      selectOptions: {
        Yes: 'Yes',
        No: 'No'
      }
    },
    {
      width: 10,
      key: 'print',
      name: 'Print'
    }
  ]
})

gridSecondary.create({
  id: 'secondary',
  perPageOptions: [10, 25, 50, 100, 150],
  customiseCols: false,
  url: {
    create: 'request/grid-secondary/create.php',
    read: 'request/grid-secondary/read.php',
    update: 'request/grid-secondary/update.php',
    delete: 'request/grid-secondary/delete.php'
  },
  deleteExceptions: {key: 'id', values: [1, 10]},
  cols: [
    {
      key: 'id',
      name: 'ID',
      primaryKey: true
    },
    {
      search: true,
      edit: true,
      type: 'text',
      key: 'sku',
      name: 'SKU'
    },
    {
      search: true,
      edit: true,
      type: 'text',
      key: 'name',
      name: 'Name'
    },
    {
      search: true,
      edit: true,
      type: 'html',
      key: 'altBarcode',
      name: 'Alt Barcode'
    },
    {
      search: true,
      type: 'number',
      key: 'barcode',
      name: 'Barcode',
      edit: true
    },
    {
      edit: true,
      width: 6,
      key: 'supplier',
      name: 'Supplier',
      search: true,
      selectOptions: {
        9: 'China',
        17: 'Burnley'
      }
    }
  ]
})
