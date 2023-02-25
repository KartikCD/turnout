import { useRouter } from "next/router";

export default function useId(key) {
  const router = useRouter();
  return router.query[key];
}
