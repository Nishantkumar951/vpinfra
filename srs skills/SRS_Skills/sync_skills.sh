#!/bin/bash

SOURCE="/Users/punittongia/Downloads/Anti Gravity/SRS_Skills"
TARGET_DIR="/Users/punittongia/Downloads/Anti Gravity/May Strategy All Projects "

# Ensure source exists
if [ ! -d "$SOURCE" ]; then
    echo "Source $SOURCE not found!"
    exit 1
fi

echo "Syncing $SOURCE to subfolders of $TARGET_DIR..."

# Sync to each project folder in May Strategy All Projects
find "$TARGET_DIR" -maxdepth 1 -type d ! -path "$TARGET_DIR" | while read -r dir; do
    # Skip if it's the SRS_Skills folder itself
    if [[ "$dir" == *"/SRS_Skills" ]]; then
        continue
    fi
    
    echo "Updating $dir"
    rm -rf "$dir/SRS_Skills"
    cp -R "$SOURCE" "$dir/"
done

# Also update the SRS_Skills folder in the root of May Strategy All Projects
echo "Updating root of $TARGET_DIR..."
rm -rf "$TARGET_DIR/SRS_Skills"
cp -R "$SOURCE" "$TARGET_DIR/"

# Check Actionable_May_Roadmap
ROADMAP_DIR="/Users/punittongia/Downloads/Anti Gravity/Square Root SEO Website/Actionable_May_Roadmap"
if [ -d "$ROADMAP_DIR" ]; then
    echo "Updating $ROADMAP_DIR..."
    rm -rf "$ROADMAP_DIR/SRS_Skills"
    cp -R "$SOURCE" "$ROADMAP_DIR"
fi

echo "Sync complete."
