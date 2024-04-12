'use client'

import { UsersApi } from "@/api/users";
import Overlay from "@/components/overlay";
import { Button } from "@/components/ui/button";
import Store from "@/store";
import { useEffect, useState } from "react";

interface UserType {
  id: number;
  email: string
}

export default function Users() {
  const [users, setUsers] = useState<UserType[]>([])
  const [isShowOverlay, setIsShowOverlay] = useState(true)
  const bearStore = Store(store => store.bears)
  const increasePopulation = Store(store => store.increasePopulation)
  
  const getUsers = async () => {
    try {
      await UsersApi.index().then(response => {
        setUsers(response.data)
        setIsShowOverlay(false)
      })
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUsers()
    console.log(bearStore)
  }, [])

  const demo = () => {
    increasePopulation()
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>bears stroe: {bearStore}</div>
      <Overlay isShow={isShowOverlay} className='' size='lg'>
        <Button onClick={demo}>Test Shadcn</Button>
      </Overlay>
      {users.map(user => <div key={user.id}>{user.email}</div>)}
    </main>
  );
}
