export interface Program {
	name: string;
	_id: string;
	__v?: number;
	poster?: string;
}

export interface Programs {
	programs: Array<Program>;
}
