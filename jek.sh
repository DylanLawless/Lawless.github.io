#!/bin/bash
# bundle install
set -e
cd cranlogs
sh run_update.sh
cd ..

bundle exec jekyll serve &
sleep 3

open -a Safari http://127.0.0.1:4000
