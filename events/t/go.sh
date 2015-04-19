#!/bin/bash
# -*- coding: utf-8 -*-
# Generate the html file

if [ -z "$1" ];then
  PAGE="index"
else
  PAGE=$( echo "$1" | tr '[:upper:]' '[:lower:]')
fi
RESULT="$PAGE".html
echo "" > $RESULT

while read -r LINE ; do
  if $(echo $LINE | grep -qE '\{\{\w+\}\}') ; then
    ITEM=$(echo $LINE | xargs | sed 's/[{{|}}]//g' | tr '[:upper:]' '[:lower:]')

#    if [ "$ITEM" == "body" ]; then
#      ITEM="${PAGE}-body"
#    fi

    ITEM="${ITEM}.html"
    if [ -f "${ITEM}" ]; then
      cat "${ITEM}" >> $RESULT
   #   echo "\n" >> $RESULT
    fi
  else
    echo "$LINE" >> $RESULT
  fi
done <${PAGE}.raw.html

git commit -a -m "auto commit by go.sh"
git push
