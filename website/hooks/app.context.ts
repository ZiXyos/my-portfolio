import { useMachine } from '@xstate/react';
import { useContext, createContext, FunctionComponent } from "react";
import { Interpreter } from 'xstate';


const AppContext = createContext<any>(

	{} as Interpreter<
		any, 
		{ 
			context: any; 
			value: any 
		}
	>
)

const useAppContext = () => {

	const ctx = useContext(AppContext);
	if (ctx === undefined) 
		throw new Error("Error while using AppContext");
	
	return ctx;
}

const AppProvider: FunctionComponent = ({ children }) => {

}

export {
	useAppContext
}
