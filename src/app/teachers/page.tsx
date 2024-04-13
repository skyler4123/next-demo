'use client'

import { TeachersApi } from "@/api/teachers";
import { useEffect, useState } from "react";
import Overlay from "@/components/overlay";
import { Button } from "@/components/ui/button";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export interface TeacherType {
  id: number;
  email: string;
  name: string;
  avatar: string;
  createdAt: string;
}

const Teachers = () => {
  const [teachers, setTeachers] = useState<TeacherType[]>([])
  const [isShowOverlay, setIsShowOverlay] = useState(true)
  const fetchTeachers = async () => {
    try {
      toast("Wow so easy !");
      setIsShowOverlay(true)
      await TeachersApi.index().then(response => {
        setTeachers(response.data)
        setIsShowOverlay(false)
        toast.dismiss()
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
      <ToastContainer />
      <Button onClick={fetchTeachers}>Refresh Teachers List</Button>
      <Overlay isShow={isShowOverlay} className={'flex flex-col w-full justify-center items-center ' + (isShowOverlay ? 'h-10' : 'h-full')}>
        <Table className=''>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead className="w-36">Avatar</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Create at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teachers.map(teacher => (
              <TableRow>
              <TableCell className="font-medium">{teacher.id}</TableCell>
              <TableCell>{teacher.avatar}</TableCell>
              <TableCell>{teacher.name}</TableCell>
              <TableCell>{teacher.email}</TableCell>
              <TableCell className="text-right">{teacher.createdAt}</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>

      </Overlay>
    </div>
  )
}

export default Teachers;