'use client'

import { TeachersApi } from "@/api/teachers"
import { useEffect, useState } from "react"
import { TeacherType } from "../page"

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
      })
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTeacher()
  }, [])
  return (
    <div>Teacher Detail Page {params.id} {teacher?.email}</div>
  )
}

export default Teacher;
