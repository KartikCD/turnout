export interface Registration {
	eventName: string;
	eventId: string;
	studentId: string;
	_id?: string;
	__v?: number;
}

export interface PostRegistration {
	registration: Registration;
}
