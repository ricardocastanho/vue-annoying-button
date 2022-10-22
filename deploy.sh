#!/usr/bin/env sh

set -e

TOKEN=${ACCESS_TOKEN}

if [ -z "$TOKEN" ]; then
  echo "Missing ACCESS_TOKEN environment variable"
  exit 1
fi

cd demo

pnpm install --frozen-lockfile
pnpm build-only

cd dist

echo > .nojekyll

git config --global user.name "Ricardo Castanho"
git config --global user.email "48383095+ricardocastanho@users.noreply.github.com"

git init
git remote add origin https://ricardocastanho:$TOKEN@github.com/ricardocastanho/vue-annoying-button.git

git checkout -B gh-pages
git add .
git commit -m 'github-pages deploy'

git push -f origin gh-pages:gh-pages
