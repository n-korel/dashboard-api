import { Logger } from "tslog";
import { ILogger } from "./logger.interface";
import { injectable } from "inversify";
import 'reflect-metadata';

@injectable()
export class LoggerService implements ILogger {
	public logger: Logger;

	constructor() {
		this.logger = new Logger ({
			displayInstanceName: false,
			displayFilePath: 'hidden',
			displayFunctionName: false,
			displayLoggerName: false
		});
	}

	log(...args: unknown[]) {
		this.logger.info(...args);
	}

	error(...args: unknown[]) {
		// отправка в sentry / rollbar
		this.logger.error(...args);
	}

	warn(...args: unknown[]) {
		this.logger.warn(...args);
	}
}
