'use client'

import { Input } from "@/components/ui/input"
import { Controller, useForm } from "react-hook-form";



const Demo = () => {
  const { control ,handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller 
        name="email"
        control={control}
        render={({field}) => {
          console.log(field)
          return (
            <Input {...field} placeholder="hahah haha"/>
          )
        }}
      />
      <Input type="submit" value="Enter" />
    </form>
  )
}

export default Demo;