import { LoggerService } from './../logger/logger.service';
import { BaseController } from '../common/base.controller';
import { NextFunction, Request, Response, Router } from 'express';
import { HTTPError } from '../errors/http-error';

export class UserController extends BaseController {
	constructor(
		logger: LoggerService
	) {
		super(logger);
		this.bindRoutes([
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/login', method: 'post', func: this.login },
		])
	}

	login(req: Request, res: Response, next: NextFunction) {
		next(new HTTPError(401, 'Ошибка авторизации', 'login'));
	}

	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, 'register');
	}
}