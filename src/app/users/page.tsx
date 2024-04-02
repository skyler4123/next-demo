'use client'

import { UsersApi } from "@/api/users";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';




export default function Users() {
  const [users, setUsers] = useState([])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'email', headerName: 'Email', width: 200 },
    // { field: 'name', headerName: 'Name', width: 200 },
    // { field: 'phone', headerName: 'Phone', width: 200 },
    // { field: 'createdAt', headerName: 'Created At', width: 200 },
  ];
  const getUsers = async () => {
    try {
      const response = await UsersApi.index();
      setUsers(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUsers()
    console.log(users)
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 25 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </main>
  );
}
