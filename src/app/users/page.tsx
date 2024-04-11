'use client'

import { UsersApi } from "@/api/users";
import Overlay from "@/components/overlay";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface UserType {
  id: number;
  email: string
}

export default function Users() {
  const [users, setUsers] = useState<UserType[]>([])

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
      <Overlay isShow={true} className='w-full h-10'>
        <Button>Test Shadcn</Button>
      </Overlay>
      {users.map(user => <div key={user.id}>{user.email}</div>)}
    </main>
  );
}
