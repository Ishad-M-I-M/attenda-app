#!/bin/bash

npm run build
sed -i \
  -e "s/API_URL/${API_URL}/g" \
  -e "s/VERCEL_URL/${VERCEL_URL}/g" \
  -e "s/ASGARDEO_CLIENT_ID/${ASGARDEO_CLIENT_ID}/g" \
  -e "s/ASGARDEO_BASE_URL/${ASGARDEO_BASE_URL}/g" \
  dist/*/main*.js

