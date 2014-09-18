npm run compile
cd public
git init
git add .
git commit -m "deploy"
git remote add origin git@github.com:twosigma/beaker-notebook-www.git
git push -f origin master:gh-pages
rm -rf .git
cd ..
