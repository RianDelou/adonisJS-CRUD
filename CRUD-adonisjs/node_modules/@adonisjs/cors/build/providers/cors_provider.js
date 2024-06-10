import {
  defineConfig
} from "../chunk-EZP2PX3J.js";
import {
  CorsMiddleware
} from "../chunk-HKR3J5WQ.js";

// providers/cors_provider.ts
var CorsProvider = class {
  constructor(app) {
    this.app = app;
  }
  register() {
    this.app.container.bind(CorsMiddleware, () => {
      const config = this.app.config.get("cors", defineConfig({}));
      return new CorsMiddleware(config);
    });
  }
};
export {
  CorsProvider as default
};
//# sourceMappingURL=cors_provider.js.map