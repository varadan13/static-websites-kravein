#!/bin/bash

folder_a="D:/kravein/code/geekery/The Greekery - Food delivery - Balwyn North - Order online_files"
folder_b="D:/kravein/code/content"

# Loop through JS files in folder A
for js_file_a in "$folder_a"/*.js; do
    # Extract the filename without path
    filename=$(basename "$js_file_a")

    # Check if the same file exists in folder B
    js_file_b="$folder_b/$filename"
    if [ -f "$js_file_b" ]; then
        # Copy content from folder A to folder B
        cat "$js_file_a" > "$js_file_b"
        echo "Content of '$filename' in folder B updated."
    fi
done

echo "Script completed."
