#!/usr/bin/env -S TS_NODE_TRANSPILE_ONLY=true npx ts-node

import { BuildOptions, context } from 'esbuild';
import jsonMerge from 'esbuild-plugin-json-merge';

type Target = 'firefox' | 'chrome';

const defaultConfig: BuildOptions = {
  bundle: true,
  target: 'ES2017',
  format: 'cjs',
  sourcemap: 'external',
};

const buildScripts = (target: Target) => context({
  ...defaultConfig,
  outdir: `dist/${target}`,
  minify: false,
  entryPoints: [
    'src/background/background.ts',
  ],
  plugins: [
    jsonMerge({
      entryPoints: [`src/manifest.${target}.json`, 'src/manifest.common.json'],
      outfile: 'manifest.json'
    })
  ]
});

const watch = async (target: Target, minify: boolean) => {
  const ctxs = await Promise.all([buildScripts(target)]);
  return await Promise.all(ctxs.map(ctx => ctx.watch()));
};

const build = async (target: Target, minify: boolean) => {
  const ctxs = await Promise.all([buildScripts(target)]);
  await Promise.all(ctxs.map(ctx => ctx.rebuild()));
  ctxs.forEach(ctx => ctx.dispose());
};

const watchArg = !!process.argv.includes('--watch');
const minifyArg = !!process.argv.includes('--minify');

const buildOrWatch = watchArg ? watch : build;

buildOrWatch('firefox', minifyArg);
buildOrWatch('chrome', minifyArg);
