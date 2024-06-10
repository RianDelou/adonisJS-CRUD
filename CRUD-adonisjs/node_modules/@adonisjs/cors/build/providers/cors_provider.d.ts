import { ApplicationService } from '@adonisjs/core/types';
export default class CorsProvider {
    protected app: ApplicationService;
    constructor(app: ApplicationService);
    register(): void;
}
