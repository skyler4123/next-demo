'use client'

import { TeachersApi } from "@/api/teachers"
import { useEffect, useState } from "react"
import { TeacherType } from "../page"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useQuery } from "@tanstack/react-query"
import Overlay from "@/components/overlay"
import Link from "next/link"

interface ParamsType {
  params: {
    id: number    
  }
}

const Teacher = ({params}: ParamsType) => {
  const { isPending, error, data, isSuccess } = useQuery({
    queryKey: ['teacher'],
    queryFn: () => TeachersApi.show({id: params.id}).then(response => response.data),
    staleTime: 150000
  })

  if (isPending) return <Overlay className={'flex flex-col w-full justify-center items-center'} />

  if (error) {
    setTimeout(() => { toast('An error has occurred: ' + error.message); }, 0)
    return (
      <div>
        <ToastContainer />
      </div>
    )
  }

  if (isSuccess) {
    setTimeout(() => { toast('Teachers loaded successfully') }, 0)
    return (
      <div>
        <Link href={'/teachers'}>Back to Teachers</Link>
        <ToastContainer />
        <div>Teacher Detail Page {params.id} {data.email}</div>
      </div>
    )
  }

}

export default Teacher;
