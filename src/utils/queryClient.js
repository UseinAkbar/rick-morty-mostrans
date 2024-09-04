import { QueryCache, QueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100_000
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      toast(error?.message)
    }
  }),
});

export default queryClient;