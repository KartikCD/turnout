export interface Event {
	name: string;
	venue: string;
	programId: string;
	description?: string;
	date: string;
	reportingTime: string;
	note?: string;
	contactDetails?: string;
	poster?: string;
	_id: string;
}

export interface Events {
	events: Array<Event>;
}
