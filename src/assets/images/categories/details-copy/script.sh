
#!/bin/bash

# iterate over all directories inside the details directory
for dir in */; do
  # remove the Prototype.zip file
  rm "$dir"Prototype.zip

  # check if the Details/Dataset directory exists
  if [ -d "$dir"Details/Dataset ]; then
    # keep only PNG files
    rm "$dir"Details/Dataset/*.png

    # if the directory is empty, remove it
    rmdir "$dir"Details/Dataset || true
  fi

  # remove the root folder if it's empty
  rmdir "$dir" || true
done

