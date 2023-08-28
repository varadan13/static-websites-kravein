#!/bin/bash

# Change to the desired directory
target_directory="D:/kravein/code/content"
cd "$target_directory" || exit

# Loop through files with .download extension
for file in *.download; do
    if [ -e "$file" ]; then
        # Remove the .download extension
        new_name="${file%.download}"
        mv "$file" "$new_name"
        echo "Renamed '$file' to '$new_name'"
    fi
done

echo "Renaming completed for .download files in '$target_directory'"
