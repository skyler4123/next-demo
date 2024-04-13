'use client'

interface ParamsType {
  params: {
    id: number    
  }
}
const Teacher = ({params}: ParamsType) => {
  return (
    <div>Teacher Detail Page {params.id}</div>
  )
}

export default Teacher;
