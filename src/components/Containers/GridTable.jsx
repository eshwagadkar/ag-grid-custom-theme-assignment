import  React, { useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react' // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css' // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import { ModuleRegistry } from '@ag-grid-community/core'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
ModuleRegistry.registerModules([ ClientSideRowModelModule ])
import { ROW_DATA } from '../data/data.js'

const GridTable = () => {

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState(ROW_DATA)

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            filter: true
        }
    })

    // Column Definitions: Defines the columns to be displayed.
   const [colDefs, setColDefs] = useState([
       { field: "make" },
       { field: "model" },
       { field: "price", valueFormatter: p => '$ ' + p.value.toLocaleString() },
       { field: "electric" }
   ])


    return (
        <div className={"ag-theme-quartz-dark grid grid--animated"}>
          <AgGridReact rowData={rowData} columnDefs={colDefs} 
                        defaultColDef={defaultColDef}
                        pagination={true}
                        paginationPageSize={5}
                        paginationPageSizeSelector={[5, 10, 15]}
         />
        </div>
    ) 
    
    
}

export default GridTable