'use client'

import { TeachersApi } from "@/api/teachers";
import { useEffect, useState } from "react";
import Teacher from "./[id]/page";
import Overlay from "@/components/overlay";
import { Button } from "@/components/ui/button";

export interface TeacherType {
  id: number;
  email: string;
}

const Teachers = () => {
  const [teachers, setTeachers] = useState<TeacherType[]>([])
  const [isShowOverlay, setIsShowOverlay] = useState(true)
  const fetchTeachers = async () => {
    try {
      setIsShowOverlay(true)
      await TeachersApi.index().then(response => {
        setTeachers(response.data)
        setIsShowOverlay(false)
      })
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTeachers();
  }, [])

  return (
    <div>
      <Button onClick={fetchTeachers}>Refresh Teachers List</Button>
      <Overlay isShow={isShowOverlay} className={'flex flex-col w-full justify-center items-center ' + (isShowOverlay ? 'h-10' : 'h-full')}>
        {teachers.map(teacher => (
          <div key={teacher.id}>{teacher.email}</div>
        ))}
      </Overlay>
    </div>
  )
}

export default Teachers;