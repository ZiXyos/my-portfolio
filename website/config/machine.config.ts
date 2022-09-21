import { assign } from "xstate";
import { IContext, IApp } from '../interfaces/machine.interface';
import { AppEvent, FocusEvent } from "../types/machine.type";

const config = {
	actions: {
		focusWindow: assign<IContext, AppEvent>(
			(context, event) => {
				const minimizedWin = context.minimizedWin.filter(
				
					w => w.app.name != (event as FocusEvent).payload.app.name 
				)

			})
	}
}
