import jwtDecode from "jwt-decode";
import { useSession } from "next-auth/react";

interface JWTDecode {
	email: string;
	exp: number;
	iat: number;
	student_id: string;
}

export const getLoginUserId = (): string => {
	const { data } = useSession();
	const decodedString: JWTDecode = jwtDecode(data?.user.id as unknown as string);
	return decodedString.student_id;
};
