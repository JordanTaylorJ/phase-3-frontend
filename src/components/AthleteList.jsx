import React, {useEffect, useState} from 'react';
import NewAthlete from './NewAthlete';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const AthleteList = () => {

    const [athletes, setAthletes] = useState([]);

    useEffect((id) => {
        fetch(`http://localhost:9292/athletes`)
        .then((r) => r.json())
        .then((athletes) => setAthletes(athletes));
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Name',
          width: 170,
          editable: true,
        },
        {
          field: 'time',
          headerName: 'Time',
          type: 'number',
          width: 110,
          editable: true,
        },
    ];

    return(
        <div>   
            <p>athlete times will list here !  !!</p>
            <NewAthlete />
    
            <Box sx={{ height: 630, width: '100%' }}>
                <DataGrid
                    rows={athletes}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    //onCellClick={routeChange}
                />
            </Box>
        </div>
    )

}

export default AthleteList;