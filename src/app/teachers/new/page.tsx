'use client'

import { TeachersApi } from "@/api/teachers";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

const TeachersNew = () => {
  const router = useRouter()
  const { register, unregister, handleSubmit, control, formState: { errors }, watch } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      password_confirmation: ''
    }
  })
  const onSubmit = async (data: any) => {
    delete(data['password'])
    delete(data['password_confirmation'])

    try {
      await TeachersApi.create({
        body: data
      }).then(response => {
        console.log(response.data)
        router.push('/teachers/' + response.data.id)
      })
    } catch(error) {
      console.log(error)
    }
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

        <Label>Name:</Label>
        <Controller
          control={control}
          name="name"
          rules={{
            required: true
          }}
          render={({ field }) => {
            return (
              <Input {...field} />
            )
          }}
        />
        {errors.name && <div>Require name!</div>}

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

export default TeachersNew;