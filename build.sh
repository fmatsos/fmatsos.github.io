#!/bin/bash

cecil_build_script_url="https://cecil.app/build.sh"
theme_name=$(awk '/theme/{gsub(/"/,""); print $2}' ./cecil.yml)
theme_dir="./themes/$theme_name"

echo "Init submodules..."
echo "$(git -v)"
git submodule update --init --recursive --remote --verbose

if [ -d $theme_dir ]; then
  cd $theme_dir || return

  if [ -f 'package.json' ]; then
    echo "Install and build theme '$theme_name'..."
    npm install
    npm run build
  fi

  cd ../..
fi

echo "Retrieve Cecil build script..."
curl -sSL $cecil_build_script_url -o cecil_build.sh

bash ./cecil_build.sh

rm ./cecil_build.sh
