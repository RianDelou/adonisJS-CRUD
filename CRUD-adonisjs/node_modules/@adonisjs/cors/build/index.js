import {
  defineConfig
} from "./chunk-EZP2PX3J.js";

// stubs/main.ts
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
var stubsRoot = dirname(fileURLToPath(import.meta.url));

// configure.ts
async function configure(command) {
  const codemods = await command.createCodemods();
  await codemods.makeUsingStub(stubsRoot, "config/cors.stub", {});
  await codemods.registerMiddleware("server", [
    {
      path: "@adonisjs/cors/cors_middleware"
    }
  ]);
  await codemods.updateRcFile((rcFile) => {
    rcFile.addProvider("@adonisjs/cors/cors_provider");
  });
}
export {
  configure,
  defineConfig,
  stubsRoot
};
//# sourceMappingURL=index.js.map