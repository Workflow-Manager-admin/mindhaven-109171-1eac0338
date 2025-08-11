#!/bin/bash
cd /home/kavia/workspace/code-generation/mindhaven-109171-1eac0338/MainContainerforMindHaven
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

