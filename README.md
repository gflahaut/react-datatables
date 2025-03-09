# DataTable Component

A flexible and customizable DataTable component built with React. It allows sorting, filtering, and pagination of data in a table format.

## Features

- **Sorting**: Sort data by clicking on column headers.
- **Filtering**: Filter rows by typing in a search input.
- **Pagination**: Navigate through the rows using previous and next buttons.
- **Customizable Rows per Page**: Set the number of rows per page.
- **Responsive**: Can be styled to work in any design system.

## Installation

To install the `DataTable` component, run the following command in your React project:

```bash
npm install gf-react-datatables
```

or using Yarn:

```bash
yarn add gf-react-datatables
```
## Prerequisites :

Before using this package, ensure your development environment meets the following requirements:

- **Node.js**:  v16 or later
- **React**: v18 or later
- **NPM**: v8+ (or Yarn v1.22+)
- **Recommended editor**: VS Code (with ESLint & Prettier extensions for formatting)
## Props

| Prop           | Type             | Default       | Description                                                              |
|----------------|------------------|---------------|--------------------------------------------------------------------------|
| `data`         | `Array`          | -             | An array of objects representing the rows of the table.                  |
| `columns`      | `Array`          | -             | An array of strings representing the columns to display in the table.    |
| `rowsPerPage`  | `Number`         | `3`           | Number of rows to display per page.                                      |

## Usage

```javascript
import React, { useState } from 'react';
import DataTable from 'gf-react-datatables';

const columns = ['firstName', 'lastName', 'startDate', 'department', 'dateOfBirth'];

const data = [
  { firstName: 'Alice', lastName: 'Johnson', startDate: '2023-01-01', department: 'Sales', dateOfBirth: '1990-01-01' },
  { firstName: 'Bob', lastName: 'Smith', startDate: '2023-02-15', department: 'Engineering', dateOfBirth: '1985-05-12' },
  { firstName: 'James', lastName: 'Doe', startDate: '2022-01-01', department: 'Engineering', dateOfBirth: '1988-04-12' },
  { firstName: 'Sarah', lastName: 'Connor', startDate: '2023-03-10', department: 'HR', dateOfBirth: '1990-02-25' },
  // more rows...
];

function App() {
  return <DataTable data={data} columns={columns} rowsPerPage={5} />;
}

export default App;
```

## Sorting, Filtering, and Pagination

- **Sorting**: Click on any column header to sort the data. Click again to toggle between ascending and descending order.
- **Filtering**: Use the search input above the table to filter rows based on any column value.
- **Pagination**: Navigate between pages using the "Prev" and "Next" buttons at the bottom of the table.

## Custom Styling

The `DataTable` component comes with default styles that can be customized via CSS. You can override or extend the existing styles in your project.

Example:

```css
.table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: #f5f5f5;
  padding: 10px;
  cursor: pointer;
}

td {
  padding: 10px;
  border: 1px solid #ddd;
}
```

## Contributing

Feel free to open issues and submit pull requests if you'd like to contribute to this project. Please make sure to follow the coding style used in the repository and write tests for new features.

## License

MIT License

## Links

- **GitHub Repository**: https://github.com/gflahaut/react-datatables
- **NPM Package**: https://www.npmjs.com/package/gf-react-datatables?activeTab=readme
