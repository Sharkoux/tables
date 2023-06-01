# Table

Package Table with customization for react projects

# Features 

- Two version: Lazy load and not Lazy load
- Custom style (sass based)
- Add the ability to sort columns
- Add the ability to search for a word
- Add pagination or scroll infinite
- Add the ability to drag and drop rows

# Install

    npm install sharkoux-packages-tables
    
    import { Table } from 'sharkoux-packages-tables'

# Usage 

  ## Not Lazy Load Version (for a small number of data): 
  
  If you have a small amount of data, the solution without lazy load will produce a table with all the data in props
  
  ## Minimum configuration for this version
   
        <Table Columns={Columns} Data={Data} rows={15} infiniteScroll={true}></Table>
        
  
  Here we need minimum 4 parameters:
  
  - ***Data***: An array containing one or more objects
    
        "users": [
        {
            "id": 250,
            "firstname": "Brent",
            "lastname": "Connelly",
            "dateBirth": "1970-11-30T07:43:01.306Z",
            "startDate": "2022-07-30T09:34:08.059Z",
            "street": "Bayer Rapids",
            "city": "Ontario",
            "state": "Minnesota",
            "zipCode": "99846",
            "departement": "Human Resources"
        }
        ]
 
 - ***Columns***: An array containing an object for each column of the array
 
        const Columns = React.useMemo(
            () =>
            [
                { header: "FirstName", accessor: "firstname", sortable: true },
                { header: "LastName", accessor: "lastname", sortable: true },
                { header: "StartDate", accessor: "startDate", sortable: false },
                { header: "Department", accessor: "departement", sortable: true },
                { header: "Date of Birth", accessor: "dateBirth", sortable: true },
                { header: "Street", accessor: "street", sortable: true },
                { header: "City", accessor: "city", sortable: true },
                { header: "State", accessor: "state", sortable: true },
                { header: "Zip Code", accessor: "zipCode", sortable: true }
            ]
          )
    
     - *Header* corresponds to the display title of the column of the table
     - *Accessor* corresponds to the key  of the data to associate with the columns
     - *sortable* if true, it becomes possible to sort the data of this columns

- ***Rows***: Number of lines to display per page 

- ***infiniteScroll or pagination*** : either infinitescroll is enabled (infiniteScroll={true}) or pagination is enabled (pagination={true})

  ## Result: 
    A table sorting data by columns, with the functionality of infinite scroll or pagination, and modifying the order displayed by clicking on the header of a column

    ![image](https://github.com/Sharkoux/tables/assets/75306270/17e6b94c-346c-424d-8135-e49d29d7261a)

    ![image](https://github.com/Sharkoux/tables/assets/75306270/5a96b905-2659-4efa-8f2b-d5cb707bb971)
    
    ![image](https://github.com/Sharkoux/tables/assets/75306270/e0f4b35a-2664-42d1-b124-06d07393b9c7)

  
  ## Customization:     
  
  - ***Styles***: import {index} from 'sharkoux-packages-tables' 
  ![image](https://github.com/Sharkoux/tables/assets/75306270/d615b827-968d-4c59-b3c8-5f4d5c9dcf70)
  ![image](https://github.com/Sharkoux/tables/assets/75306270/89b6d610-a827-435d-9117-6dd7f35eebb3)

 The customization of the style is quite simple, the classes are generated like this: 
 
    -Columns:   class="Columns Columns-firstname Columns-Sortable"
    The general class, the cell-specific class and the sort-specific class
    
    -Rows: class="rows rows-14"
    The general class and the row-specific class
    
    -Cell: class="cell cell-firstname"
    The general class and columns-specific class
    
 - ***Search***: 
        Two choices: 
           - Activate input which will display an input allowing you to search within the table
                   
                        <Table Columns={Columns} Data={Data} rows={15} pagination={true} input={true}></Table>
                        
  ![image](https://github.com/Sharkoux/tables/assets/75306270/231d1474-b328-4014-b4db-da582be8fd3e)
           
          - Use the search props to send a search already performed in your project to the table
           
                       <Table Columns={Columns} Data={Data} rows={15} pagination={true} search={'sales'} ></Table>
 
- ***Drag and Drop***: By adding the draggables props, it becomes possible to reorganize the lines thanks to the drag and drop
    
                        <Table Columns={Columns} Data={Data} rows={15} pagination={true} draggables={true}></Table>
                        
   ![image](https://github.com/Sharkoux/tables/assets/75306270/2da63849-fee7-42cd-ac86-92d1890c252e)
   ![image](https://github.com/Sharkoux/tables/assets/75306270/680f418d-8592-4e72-a053-938eb00dfdc6)
   
   ## Lazy Load version
   
   The main idea of lazy loading is to delay loading a resource until it is actually needed. Rather than loading all resources upfront, lazy loading allows them to load gradually as the user scrolls down the page or        performs a specific action.
   
   ## Minimum configuration for this version
    
   
     
   
   



