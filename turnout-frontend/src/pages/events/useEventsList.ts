import { Registration } from "@/models/_registrations/Registration";
import { useAddRegistration, useGetEvents } from "@/queries";
import * as React from "react";

interface Props {
	addData: Registration | undefined;
	addError: string;
	addIsError: boolean;
	addIsLoading: boolean;
}

export default function useEventsList(programId: string) {
	const { data, isLoading, isError, error, refetch } = useGetEvents(programId);

	const {
		mutate: addRegistration,
		data: addData,
		isLoading: addIsLoading,
		isError: addIsError,
		error: addError,
	} = useAddRegistration();
	const [registrationData, setRegistrationData] = React.useState<Props>({
		addData: undefined,
		addError: "",
		addIsError: false,
		addIsLoading: false,
	});

	React.useEffect(() => {
		if (programId !== undefined) {
			refetch();
		}
	}, [programId]);

	const onRegisterClick = React.useCallback(
		(registration: Registration) => {
			try {
				setRegistrationData(prevProps => ({
					...prevProps,
					addIsLoading: true,
				}));
				addRegistration(registration, {
					onError() {
						setRegistrationData(prevProps => ({
							...prevProps,
							addIsLoading: false,
							addIsError: true,
							addError: "You cannot register for same event twice.",
						}));
					},
					onSuccess(data) {
						setRegistrationData(prevProps => ({
							...prevProps,
							addIsLoading: false,
							addIsError: false,
							addError: "You cannot register for same event twice.",
							addData: data as unknown as Registration,
						}));
					},
				});
			} catch (err) {
				setRegistrationData(prevProps => ({
					...prevProps,
					addIsError: true,
					addIsLoading: false,
					addError: "You cannot register for same event twice.",
				}));
			}
		},
		[addRegistration]
	);

	return {
		data,
		isLoading,
		isError,
		error,
		onRegisterClick,
		registrationData,
	};
}
