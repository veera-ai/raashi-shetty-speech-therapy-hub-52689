#!/bin/bash
cd /home/kavia/workspace/code-generation/raashi-shetty-speech-therapy-hub-52689/speech_bridge_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

