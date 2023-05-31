# Table

Package Table with customization for react projects

# Features 

- Two version: Lazy load and not Lazy load
- Custom style
- Add the ability to sort columns
- Add the ability to search for a word
- Add pagination or scroll infinite
- Add the ability to drag and drop rows

# Install

    npm install sharkoux-packages-tables

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
  






