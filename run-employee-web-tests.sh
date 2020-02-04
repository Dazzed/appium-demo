#!/bin/bash

set -eu
export PATH=/usr/local/opt/node@10/bin:$PATH
echo "INFO : runing employee web tests"
npm install
npm run web:emp