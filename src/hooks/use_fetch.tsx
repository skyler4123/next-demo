import { TeachersApi } from "@/api/teachers"
import { useEffect, useState } from "react"

const useFetch = (url: string) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    TeachersApi.index().then(response => setData(response.data))
  }, [url])

  return data
}

export default useFetch;