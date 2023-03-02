export interface Student {
	name: string;
	registrationId: string;
	email: string;
	password: string;
	department: string;
	image?: string;
	_id: string;
	__v?: number;
}

export interface Students {
	students: Array<Student>;
}

export interface PostStudentResponse {
	student: Student;
}
