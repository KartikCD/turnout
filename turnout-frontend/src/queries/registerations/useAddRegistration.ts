import { Registration } from "@/models/_registrations/Registration";
import httpCommon from "@/util/http-common";
import { useMutation } from "@tanstack/react-query";

const addRegistration = async (registration: Registration) => {
	const response = await httpCommon.post("/registration", registration);
	if (response.status === 201) {
		return response.data.registration as Registration;
	}
	throw new Error(response.data.message);
};

export const useAddRegistration = () => {
	return useMutation(addRegistration);
};
