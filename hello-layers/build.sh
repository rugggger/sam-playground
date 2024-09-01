#!/bin/bash
sam build && node ./scripts/ts_compiler.mjs && sam local start-api -n env.json --debug