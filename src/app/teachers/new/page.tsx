'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
        <Label>Email:</Label>
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

        <Label>Password:</Label>
        <Controller
          control={control}
          name="password"
          render={({ field }) => {
            return (
              <Input {...field} />
            )
          }}
        />

        <Label>Password Confirmation:</Label>
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
        <Input type='submit' value="Create new Teacher" className="cursor-pointer" />

      </form>
    </div>
  )
}

export default ReactHookForm;