import * as esbuild from "esbuild";
import path from "node:path";
import fsExtra from "fs-extra";

const pkgPath = path.join(process.cwd(), "package.json");

const pkg = fsExtra.readJsonSync(pkgPath);

await esbuild
  .build({
    entryPoints: ["src/index.ts"],
    minify: true,
    bundle: true,
    target: [`node${pkg.engines.node}`],
    platform: "node",
    format: "esm",
    sourcemap: true,
    outdir: "build",
    external: ["sqlite", "sqlite3"],
    logLevel: "info",
  })
  .catch((err: unknown) => {
    console.error(err);
    process.exit(1);
  });
