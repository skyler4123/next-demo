'use client'

import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";

const ReactHookForm = () => {
  const { register, handleSubmit, control, formState: { errors }, watch } = useForm({
    defaultValues: {
      email: '',
      password: '',
      password_confirmation: ''
    }
  })
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: true
          }}
          render={({ field }) => {
            return (
              <Input {...field} />
            )
          }}
        />
        {errors.email && <div>Require email!</div>}
        <Controller
          control={control}
          name="password"
          render={({ field }) => {
            return (
              <Input {...field} />
            )
          }}
        />
        <Controller
          control={control}
          name="password_confirmation"
          rules={{
            validate: (value: string) => {
              return watch('password') == value
            }
          }}
          render={({ field }) => {
            return (
              <Input {...field} />
            )
          }}
        />
        {errors.password_confirmation && <div>Password doesn't match!</div>}
        <Input type='submit' value="Submit" className="cursor-pointer" />

      </form>
    </div>
  )
}

export default ReactHookForm;