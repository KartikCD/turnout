import * as React from "react";
import { LayoutState } from "../constants";

interface Props {
	initialState: LayoutState;
	children: React.ReactNode;
}

export const LayoutContext = React.createContext<LayoutState>({
	changeTitle: () => null,
	title: "",
});

export const LayoutContextProvider: React.FC<Props> = React.memo(
	({ initialState, children }) => {
		return (
			<LayoutContext.Provider value={initialState}>
				{children}
			</LayoutContext.Provider>
		);
	}
);
