export interface Task {
	number: number;
	name: string;
	text: string;
	answer: number;
	additionalInformation?:
		| { type: "numbers"; array: string[] }
		| { type: "file"; linkFile: string; downloadFile: string };
}
