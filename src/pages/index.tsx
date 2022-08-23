import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["item.get-all"])

  if (!data || isLoading) return <div>Loading...</div>

  return (
    <div>
      {data.map(item => {
        return (
          <div key={item.id}>
            {item.name}
          </div>
        )
      })}
    </div>
  );
};

export default Home;
