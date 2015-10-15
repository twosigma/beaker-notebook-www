npm run compile
cd public
git init
rm -f ship.conf
find . -type f -name '#*#' -delete
find . -type f -name '*~' -delete
rm -rf templates
git add .
git commit -m "deploy"
git remote add origin https://github.com/twosigma/beaker-notebook-www.git
git push -f origin master:gh-pages
rm -rf .git
cd ..
