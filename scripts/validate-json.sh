#!/usr/bin/env bash
set -euo pipefail
find agents -name "*.json" -type f -print0 | xargs -0 -I{} sh -c 'jq . {} > /dev/null'
echo "JSON OK"
