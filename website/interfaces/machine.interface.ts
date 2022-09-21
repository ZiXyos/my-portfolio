import { Mode } from '../types/machine.type';

interface IActiveWindow {
	app: IApp,
	focused: boolean,
	defaultUrl?: string
}

interface IMinWindow {
	app: IApp
}

interface IApp {
	id: string,
	name: string,
	isActive: boolean,
}

interface IContext {
	activesWin: IActiveWindow[],
	minimizedWin: IMinWindow[],
	mode: Mode
}

export {
	IContext
	IApp
}

