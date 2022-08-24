import { trpc } from "../utils/trpc"

const CreateItemForm = () => {
  const { mutate, data, isLoading } = trpc.useMutation(["item.create"])

  if (!data) {
    return <div>Loading...</div>
  }

  const handleClick = async () => {
    mutate({
      name: data?.name,
      quantity: data?.quantity
    });
  };

  return (
    <div>

    </div>
  )
}

export default CreateItemForm