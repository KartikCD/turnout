import * as React from "react";
import { LayoutState } from "./constants";

export default function useLayout() {
	const [title, setTitle] = React.useState<string>("");

	const onTitleChange = React.useCallback(
		(t: string) => {
			setTitle(t);
		},
		[setTitle]
	);

	const initialState: LayoutState = React.useMemo(
		() => ({
			title,
			changeTitle: onTitleChange,
		}),
		[title, onTitleChange]
	);

	return {
		initialState,
	};
}
