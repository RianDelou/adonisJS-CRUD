// src/define_config.ts
function defineConfig(config) {
  return {
    enabled: true,
    origin: true,
    methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
    headers: true,
    exposeHeaders: [],
    credentials: true,
    maxAge: 90,
    ...config
  };
}

export {
  defineConfig
};
//# sourceMappingURL=chunk-EZP2PX3J.js.map