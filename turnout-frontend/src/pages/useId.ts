import { useRouter } from "next/router";

export default function useId(key: string) {
	const router = useRouter();

	return router.query[key] as string;
}
