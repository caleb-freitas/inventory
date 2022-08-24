import { trpc } from "../utils/trpc"
import { useForm } from "react-hook-form";
import { CreateItemInput } from "../schema";

const CreateItemForm = () => {
  const { handleSubmit, register } = useForm<CreateItemInput>()

  const { mutate, error } = trpc.useMutation(["items.register-item"])

  const onSubmit = (data: CreateItemInput) => {
    mutate(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && error.message}

        <h2>Register Item</h2>

        <input
          type="text"
          {...register("name")}
        />

        <input
          type="number"
          {...register("quantity", {
            valueAsNumber: true,
          })}
        />

        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default CreateItemForm
