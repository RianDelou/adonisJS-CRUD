// src/cors_middleware.ts
var SIMPLE_EXPOSE_HEADERS = [
  "cache-control",
  "content-language",
  "content-type",
  "expires",
  "last-modified",
  "pragma"
];
var CorsMiddleware = class {
  #config;
  #isEnabled;
  constructor(config) {
    this.#config = this.#normalizeConfig(config);
    this.#isEnabled = this.#computeIsEnabled();
  }
  /**
   * Normlizes config object
   */
  #normalizeConfig(config) {
    config.exposeHeaders = config.exposeHeaders.map((header) => header.toLowerCase());
    const hasExtraHeaders = config.exposeHeaders.find((header) => {
      return SIMPLE_EXPOSE_HEADERS.indexOf(header) === -1;
    });
    if (!hasExtraHeaders) {
      config.exposeHeaders = [];
    }
    return config;
  }
  /**
   * Computes the isEnabled callback
   */
  #computeIsEnabled() {
    return typeof this.#config.enabled === "function" ? this.#config.enabled : () => this.#config.enabled;
  }
  /**
   * Computes the origin for the current request based upon the
   * user config.
   *
   * Origin match is always case sensitive
   */
  #computeResponseOrigin(origin, ctx) {
    let allowedOrigins = this.#config.origin;
    if (typeof allowedOrigins === "function") {
      allowedOrigins = allowedOrigins(origin, ctx);
    }
    if (allowedOrigins === true) {
      return origin;
    }
    if (allowedOrigins === false) {
      return null;
    }
    if (allowedOrigins === "*") {
      return this.#config.credentials === true ? origin : "*";
    }
    if (Array.isArray(allowedOrigins)) {
      if (allowedOrigins.find((allowedOrigin) => allowedOrigin === origin)) {
        return origin;
      }
      return null;
    }
    if (allowedOrigins.split(",").find((allowedOrigin) => allowedOrigin === origin)) {
      return origin;
    }
    return null;
  }
  /**
   * Returns an array of headers allowed based upon user config
   * and request headers.
   *
   * The array items are casted to lowercase for case insensitive
   * match.
   */
  #computedAllowedHeaders(headers, ctx) {
    let allowedHeaders = this.#config.headers;
    if (typeof allowedHeaders === "function") {
      allowedHeaders = allowedHeaders(headers, ctx);
    }
    if (allowedHeaders === true) {
      return headers.map((header) => header.toLowerCase());
    }
    if (allowedHeaders === false) {
      return [];
    }
    if (Array.isArray(allowedHeaders)) {
      return allowedHeaders.map((header) => header.toLowerCase());
    }
    return allowedHeaders.split(",").map((header) => header.toLowerCase());
  }
  /**
   * Sets the `Access-Control-Allow-Origin` header
   */
  #setOrigin(response, allowedOrigin) {
    response.header("Access-Control-Allow-Origin", allowedOrigin);
  }
  /**
   * Setting `Access-Control-Expose-Headers` headers, when custom headers
   * are defined. If no custom headers are defined, then simple response
   * headers are used instead.
   */
  #setExposedHeaders(response) {
    if (this.#config.exposeHeaders.length) {
      response.header("Access-Control-Expose-Headers", this.#config.exposeHeaders.join(","));
    }
  }
  /**
   * Allows `Access-Control-Allow-Credentials` when enabled inside the user
   * config.
   */
  #setCredentials(response) {
    if (this.#config.credentials === true) {
      response.header("Access-Control-Allow-Credentials", "true");
    }
  }
  /**
   * Set `Access-Control-Allow-Methods` header.
   */
  #setAllowMethods(response) {
    response.header("Access-Control-Allow-Methods", this.#config.methods.join(","));
  }
  /**
   * Set `Access-Control-Allow-Headers` header.
   */
  #setAllowHeaders(response, allowedHeaders) {
    response.header("Access-Control-Allow-Headers", allowedHeaders.join(","));
  }
  /**
   * Set `Access-Control-Max-Age` header.
   */
  #setMaxAge(response) {
    if (this.#config.maxAge) {
      response.header("Access-Control-Max-Age", this.#config.maxAge);
    }
  }
  /**
   * Ends the preflight request with 204 status code
   */
  #endPreFlight(response) {
    response.status(204).send(null);
  }
  /**
   * Handle HTTP request for CORS. This method is binded as a before hook
   * to the HTTP server.
   */
  async handle(ctx, next) {
    if (!this.#isEnabled(ctx)) {
      return next();
    }
    const origin = ctx.request.header("origin");
    if (!origin) {
      return next();
    }
    const allowedOrigin = this.#computeResponseOrigin(origin, ctx);
    if (ctx.request.method() === "OPTIONS") {
      if (!allowedOrigin) {
        this.#endPreFlight(ctx.response);
        return;
      }
      const requestMethod = ctx.request.header("Access-Control-Request-Method");
      if (!requestMethod || this.#config.methods.indexOf(requestMethod) === -1) {
        this.#endPreFlight(ctx.response);
        return;
      }
      let requestHeaders = ctx.request.header("Access-Control-Request-Headers");
      if (requestHeaders && requestHeaders !== "") {
        requestHeaders = requestHeaders.split(",");
      } else {
        requestHeaders = [];
      }
      const allowedHeaders = this.#computedAllowedHeaders(requestHeaders, ctx);
      const headersMatches = requestHeaders.every((header) => {
        if (header === "origin") {
          return true;
        }
        return allowedHeaders.indexOf(header.toLowerCase()) > -1;
      });
      if (headersMatches === false) {
        this.#endPreFlight(ctx.response);
        return;
      }
      this.#setOrigin(ctx.response, allowedOrigin);
      this.#setCredentials(ctx.response);
      this.#setExposedHeaders(ctx.response);
      this.#setAllowMethods(ctx.response);
      this.#setAllowHeaders(ctx.response, allowedHeaders);
      this.#setMaxAge(ctx.response);
      this.#endPreFlight(ctx.response);
    } else {
      if (allowedOrigin) {
        this.#setOrigin(ctx.response, allowedOrigin);
        this.#setCredentials(ctx.response);
        this.#setExposedHeaders(ctx.response);
      }
      return next();
    }
  }
};

export {
  CorsMiddleware
};
//# sourceMappingURL=chunk-HKR3J5WQ.js.map