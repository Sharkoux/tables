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
                { header: "Zip Code", accessor: "zipCode", sortable: true, 
                cell: ({ value }) => <Link className="links link " to={}>{value}</Link> }
            ]
          )

          
    
     - *Header* corresponds to the display title of the column of the table
     - *Accessor* corresponds to the key  of the data to associate with the columns
     - *sortable* if true, it becomes possible to sort the data of this columns
     - *cell* corresponds to the cell component to be displayed in the column (optional)

- ***Rows***: Number of lines to display per page 

- ***infiniteScroll or pagination*** : either infinitescroll is enabled (infiniteScroll={true}) or pagination is enabled (pagination={true})
 
  ## Customization:     

 - ***Search***: 
        Two choices: 
           - Activate input which will display an input allowing you to search within the table
                   
                        <Table Columns={Columns} Data={Data} rows={15} pagination={true} input={true}></Table>
           
          - Use the search props to send a search already performed in your project to the table
           
                       <Table Columns={Columns} Data={Data} rows={15} pagination={true} search={'sales'} ></Table>
 
- ***Drag and Drop***: By adding the draggables props, it becomes possible to reorganize the lines thanks to the drag and drop
    
                        <Table Columns={Columns} Data={Data} rows={15} pagination={true} draggables={true}></Table>
   
   
   ## Lazy Load version
   
   The main idea of lazy loading is to delay loading a resource until it is actually needed. Rather than loading all resources upfront, lazy loading allows them to load gradually as the user scrolls down the page or        performs a specific action.
   
   ## Configuration for this version
    
          <Table first={lazyState.first} draggables={lazyState.draggable} onSort={onSort} page={lazyState.page} onPage={onPage} lazy={true} customClass={styles} Columns={Columns} Data={user} rows={lazyState.rows} pagination={lazyState.pagination} infiniteScroll={lazyState.infiniteScroll} />
   
   ### Columns: 
   Init an array containing an object for each column of the array
   
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
                { header: "Zip Code", accessor: "zipCode", sortable: true, 
                cell: ({ value }) => <Link className="links link " to={}>{value}</Link>}


            ]
           )

     - *Header* corresponds to the display title of the column of the table
     - *Accessor* corresponds to the key  of the data to associate with the columns
     - *sortable* if true, it becomes possible to sort the data of this columns
     - *cell* corresponds to the cell component to be displayed in the column (optional)
       
   ### States: 
   
        const [lazyState, setlazyState] = useState({
            first: 0,
            rows: 30,
            page: 1,
            sortField: null,
            sortOrder: null,
            search: null,
            pagination: true,
            infiniteScroll: false,
            input: false,
            draggable: true
        });
    
    -***first***: Range start position (Updated by onPage and onSort)

    -***rows***: Number of elements per page or range (infinite scroll)
    
    -***page***: Current page (Updated by onPage and onSort)
    
    -***sortField***: The sorted column accessor (Updated by onSort)
    
    -***sortOrder***: Sort order (asc or desc) (Updated by onSort)
    
    -***search***: String for a search 
    
    -***pagination or infiniteScroll***: Your choice
    
    -***input***: Activate the already integrated input
    
    -***draggable***: Activate the function allowing to drag and drop the rows

   ### Function :
   
   There are 2 functions provided, one managing the pages (onPage) and one managing the sort (onSort)
   
   For example:
   
        const onPage = (event) => {
            const { first, page } = event;
                setlazyState((prevState) => ({
                    ...prevState,
                    first: first,
                    page: page
            }));

           };
   
  
   Has built-in table component like this: onPage={onPage}
   
   Modifies the first and page states when a page change or a scroll is executed
   
   
        const onSort = (event) => {
            const { sortField, sortOrder } = event;
                if (lazyState.infiniteScroll) {
                    setlazyState((prevState) => ({
                        ...prevState,
                        sortField: sortField,
                        sortOrder: sortOrder,
                        page: 1,
                        first: 0
                 }));
                }
                else {
                    setlazyState((prevState) => ({
                        ...prevState,
                        sortField: sortField,
                        sortOrder: sortOrder
                    }));
                }
            };     
   
   Has built-in table component like this: onSort={onSort}
   
   Modifies the states related to the data display order (in pagination or infinite scroll)
   
   ### And the data?

   In a lazy load context, data is fetched by range, here is an example of an API call that can be applied:
   
                
            getLazyData = async (api, start, end, search, sortField, sortOrder) => {
                const apiUrl = `${this.baseApi}/${api}`;

                let queryString = `_start=${start}&_end=${end}`;

                if (search) {
                    queryString += `&q=${search}`;
                }

                if (sortField && sortOrder) {
                    queryString += `&_sort=${sortField}&_order=${sortOrder}`;
                }

                const res = await fetch(`${apiUrl}?${queryString}`);
                return await this.responseHandler(res);
            };
   
   Assuming that I have a server to which I make API requests to retrieve my data, I set up a get function taking the following parameters:
   
    - ***start***: the state first
    - ***end***: the state first + rows
    - ***search***: If a string to search
    - ***sortField and sortOrder***: If data sorted 
  
  Thus, I only have to make my API call each time my states are updated and it is my getLazyData function that will manage the sorting, the search and return only the necessary data:
  

            useEffect(() => {
                loadLazyData();
            }, [lazyState]);

            const loadLazyData = async () => {
                const start = lazyState.first;
                const end = lazyState.first + lazyState.rows;

                api.getLazyData('users', start, end, lazyState.search, lazyState.sortField, lazyState.sortOrder)
                    .then(data => {
                        if (!lazyState.infiniteScroll) {
                            //if pagination
                            setUser(data)
                        } else {
                            if (lazyState.page === 1) {
                                setUser(data)
                            }
                            else {
                                setUser(prevData => [...prevData, ...data]);
                            }
                        }
                    })

            }



# Result: 
   
A table sorting data by columns, with the functionality of infinite scroll or pagination, and modifying the order displayed by clicking on the header of a column

  ![image](https://github.com/Sharkoux/tables/assets/75306270/d615b827-968d-4c59-b3c8-5f4d5c9dcf70)
  ![image](https://github.com/Sharkoux/tables/assets/75306270/89b6d610-a827-435d-9117-6dd7f35eebb3)
  ![image](https://github.com/Sharkoux/tables/assets/75306270/2da63849-fee7-42cd-ac86-92d1890c252e)
  ![image](https://github.com/Sharkoux/tables/assets/75306270/680f418d-8592-4e72-a053-938eb00dfdc6)
   
 
 The customization of the style is quite simple, the classes are generated like this: 
 
    -Columns:   class="Columns Columns-firstname Columns-Sortable"
    The general class, the cell-specific class and the sort-specific class
    
    -Rows: class="rows rows-14"
    The general class and the row-specific class
    
    -Cell: class="cell cell-firstname"
    The general class and columns-specific class
    
   


