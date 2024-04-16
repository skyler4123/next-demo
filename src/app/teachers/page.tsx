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
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import useFetch from "@/hooks/use_fetch";


export interface TeacherType {
  id: number;
  email: string;
  name: string;
  avatar: string;
  createdAt: string;
}

const Teachers = () => {
  // const data1 = useFetch(null)
  // console.log('wwwwwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeeeeeee', data1)
  const { isPending, error, data, isSuccess, refetch } = useQuery({
    queryKey: ['teachers'],
    queryFn: () => TeachersApi.index().then(response => response.data),
    staleTime: 150000
  })

  const demo = () => {
    refetch()
  }

  if (isPending) return <Overlay className={'flex flex-col w-full justify-center items-center'} />

  if (error) {
    setTimeout(() => { toast('An error has occurred: ' + error.message) }, 0)
    return (
      <div>
        <ToastContainer />
      </div>
    )
  }

  if (isSuccess) {
    setTimeout(() => { toast('Teachers loaded: ' + data.length) }, 0)
    return (
      <div>
        <ToastContainer />
        <button onClick={demo}>Refetch</button>
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
            {data.map((teacher) => (
              <TableRow>
              <TableCell className="font-medium">{teacher.id}</TableCell>
              <TableCell>{teacher.avatar}</TableCell>
              <TableCell>
                <Link href={`/teachers/${teacher.id}`}>{teacher.name}</Link>
              </TableCell>
              <TableCell>{teacher.email}</TableCell>
              <TableCell className="text-right">{teacher.createdAt}</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default Teachers;