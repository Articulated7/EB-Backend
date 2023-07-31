#!/usr/bin/env bash

npm run typeorm migration:generate -p ./libs/database/migration/${1}
