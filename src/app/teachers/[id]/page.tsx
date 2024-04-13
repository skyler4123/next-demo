'use client'

import { TeachersApi } from "@/api/teachers"
import { useEffect, useState } from "react"
import { TeacherType } from "../page"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

interface ParamsType {
  params: {
    id: number    
  }
}

const Teacher = ({params}: ParamsType) => {
  const [teacher, setTeacher] = useState<TeacherType>()
  const fetchTeacher = async () => {
    try {
      await TeachersApi.show({id: params.id}).then(response => {
        setTeacher(response.data)
        toast("Wow so easy !");
      })
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTeacher()
  }, [])
  return (
    <div>
      <div onClick={(fetchTeacher)}>Teacher Detail Page {params.id} {teacher?.email}</div>
      <ToastContainer />
    </div>
  )
}

export default Teacher;
