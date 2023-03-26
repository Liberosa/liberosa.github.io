#!/bin/bash
STATUS="$(git status)"

if [[ $STATUS == *"nothing to commit, working tree clean"* ]]
then
    cd www
    rm -rf .next
    rm -rf out
    yarn build
    yarn export
    touch out/.nojekyll
    cd ..
    
    sed -i '/out/d' ./.gitignore
    git add .
    git commit -m "Edit .gitignore to publish"
    git push origin `git subtree split --prefix www/build/static dev`:master --force
    git reset HEAD~
    git checkout .gitignore
else
    echo "Need clean working directory to publish"
fi