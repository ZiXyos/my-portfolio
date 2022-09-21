import { IApp } from '../interfaces/machine.interface'

type Mode = 'light' | 'dark';
type MachineState = 'on' | 'off' | 'sleep';
type SessionState = 'log_in' | 'log_out';

type MachineEvent = {
	type: 'TOGGLE_MACHINE',
	payload: { state: MachineState}
}

type FocusEvent = {
	type: 'TOGGLE_FOCUS',
	payload: { app: IApp }
}

type CloseEvent = {
	type: 'CLOSE_WINDOW',
	payload: {  app: IApp }
}

type ClickEvent = {
	type: 'CLICK_EVENT'
}

type AuthEvent = {
	type: 'TOGGLE_AUTH'
	payload: { state: SessionState }
}

type ToggleMode = {
	type: 'TOGGLE_MODE'
	payload: { mode: Mode }
}

type AppEvent = 
	| FocusEvent
	| ClickEvent
	| AuthEvent
	| CloseEvent
	| MachineEvent
	| ToggleMode

export {
	Mode,
	AppEvent
	FocusEvent
}
