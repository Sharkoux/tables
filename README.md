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
  
  - ***Styles***: import 

