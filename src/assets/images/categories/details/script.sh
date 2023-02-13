#!/bin/bash
for folder in $(ls -d */); do
  cd $folder
  unzip Prototype.zip
  rm Prototype.zip
  count=1
  for image in Details/Dataset/*.png; do
    mv "$image" "image$count.png"
    count=$((count + 1))
  done
  rm -rf Details
  cd ..
done

