import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import DataTable from "../src/datatable/Datatables";
import '@testing-library/jest-dom'

const mockData = [
  { firstName: "Alice", lastName: "Johnson", startDate: "01/01/2023", department: "Sales", dateOfBirth: "1990-01-01", street: "123 Main St", city: "NYC", state: "NY", zipCode: "10001" },
  { firstName: "Bob", lastName: "Smith", startDate: "02/15/2023", department: "Engineering", dateOfBirth: "1985-05-12", street: "456 Elm St", city: "LA", state: "CA", zipCode: "90001" },
  { firstName: "Charlie", lastName: "Brown", startDate: "03/10/2023", department: "HR", dateOfBirth: "1988-03-25", street: "789 Pine St", city: "Chicago", state: "IL", zipCode: "60601" },
  { firstName: "David", lastName: "Williams", startDate: "04/22/2023", department: "Marketing", dateOfBirth: "1992-07-14", street: "101 Oak St", city: "Dallas", state: "TX", zipCode: "75201" },
  { firstName: "Eva", lastName: "Martinez", startDate: "05/18/2023", department: "Finance", dateOfBirth: "1989-09-03", street: "202 Maple St", city: "Miami", state: "FL", zipCode: "33101" },
];


const columns = ["firstName", "lastName", "startDate", "department", "dateOfBirth", "street", "city", "state", "zipCode"];

describe('DataTable Component', () => {
  it('renders without crashing', () => {
    render(<DataTable data={mockData} columns={columns} />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByText('Page 1 of 2')).toBeInTheDocument();
  });

  it('filters data based on search input', () => {
    render(<DataTable data={mockData} columns={columns} />);
    
    // Initially, we should see 3 rows
    expect(screen.getAllByRole('row')).toHaveLength(4); // includes header row

    // Enter "John" in the search input
    fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'John' } });

    // After filtering, the row count should update
    expect(screen.getAllByRole('row')).toHaveLength(2); // includes header row + matching data rows
  });

  it('sorts data based on column header click', () => {
    render(<DataTable data={mockData} columns={columns} />);
  
    // Check the initial sorting order (firstName should be sorted by default)
    const firstNameColumn = screen.getByTestId('column-firstName');
    
    // Click on the firstName column to sort (ascending order)
    fireEvent.click(firstNameColumn);
    
    // After sorting, we expect the first row's name to be "James" (ascending order)
    const firstRowFirstName = screen.getAllByRole('cell')[0]; // The first cell should have the first name
    expect(firstRowFirstName).toHaveTextContent('Eva');
    
    // Click again to sort in descending order
    fireEvent.click(firstNameColumn);
    
    // Now the first row should be "Sarah"
    const newFirstRowFirstName = screen.getAllByRole('cell')[0];
    expect(newFirstRowFirstName).toHaveTextContent('Alice');
  });
  
  

  it('handles pagination correctly', () => {
    render(<DataTable data={mockData} columns={columns} rowsPerPage={2} />);

    // Check initial page and rows
    expect(screen.getByText('Page 1 of 3')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(3); // header row + 2 data rows
    
    // Click "Next" to go to the next page
    fireEvent.click(screen.getByText('Next'));
    
    // Now the page should be 2
    expect(screen.getByText('Page 2 of 3')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(3); // header row + 2 data rows (next page)

    // Click "Prev" to go back to the first page
    fireEvent.click(screen.getByText('Prev'));
    
    // Page should be 1 again
    expect(screen.getByText('Page 1 of 3')).toBeInTheDocument();
  });

  it('displays "No results found" when no data matches the search', () => {
    render(<DataTable data={mockData} columns={columns} />);
    
    // Initially, there should be results
    expect(screen.getAllByRole('row')).toHaveLength(4); // includes header row

    // Enter a search term that matches no data
    fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'Nonexistent' } });

    // The table should show "No results found"
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });
});
