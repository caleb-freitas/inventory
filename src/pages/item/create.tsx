import { trpc } from "../../utils/trpc"
import { useForm } from "react-hook-form";
import { CreateItemInput } from "../../schema";

const CreateItemForm = () => {
  const { handleSubmit, register, reset } = useForm<CreateItemInput>()

  const { mutate, error } = trpc.useMutation(["items.register-item"])

  const onSubmit = (data: CreateItemInput) => {
    mutate(data)
    reset()
  }

  return (
    <div>
      <h2
        className="text-3xl font-black text-gray-200 m-4"
      >
        Register item
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-x-2 mt-12 mb-4 m-4"
      >
        {error && error.message}

        <input
          type="text"
          {...register("name")}
          className="rounded-lg bg-gray-600 p-3 w-120"
        />

        <input
          type="number"
          {...register("quantity", {
            valueAsNumber: true,
          })}
          className="rounded-lg bg-gray-600 p-3 w-24"
        />

        <button
          type="submit"
          className="text-gray-900 bg-yellow-500 font-bold p-3 rounded-lg w-32 hover:bg-yellow-300 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default CreateItemForm
