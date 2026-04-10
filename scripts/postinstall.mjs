import { readFileSync, writeFileSync } from "node:fs";

const file = "node_modules/@opennextjs/cloudflare/dist/cli/build/utils/middleware.js";

const patched = `import path from "node:path";
import { loadFunctionsConfigManifest, loadMiddlewareManifest } from "@opennextjs/aws/adapters/config/util.js";
export function useNodeMiddleware(options) {
    // PATCH: Next.js 16 proxy always runs on Node.js runtime.
    // @opennextjs/cloudflare has not yet adapted to this change.
    // Skip the check until upstream support is added.
    return false;
}
`;

try {
  writeFileSync(file, patched);
  console.log("[postinstall] Patched @opennextjs/cloudflare: skip Node.js middleware check");
} catch {
  console.warn("[postinstall] Could not patch @opennextjs/cloudflare (file not found, skipping)");
}
