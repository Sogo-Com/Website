#!/bin/sh
BACKUP_DIR="/home/guillianv/dev/gvvinfo/sogocom/Backup/"
PROD_DIR="/home/guillianv/dev/gvvinfo/sogocom/Website/"

[[ ! -d "$BACKUP_DIR" ]] && mkdir -p "$BACKUP_DIR"

foldername=$(date +%Y%m%d%k%M)
fullpath="$BACKUP_DIR$foldername"

[[ ! -d "$fullpath" ]] && mkdir -p "$fullpath"

cp -a $PROD_DIR $fullpath
echo "Backup done"



number_backup=$(ls $BACKUP_DIR | wc -l)
last_backup=$(find $BACKUP_DIR -mindepth 1 -maxdepth 1 -type d -exec basename {} \; | sort -n | head -n 1)


if [ $number_backup -ge 3 ]
then
    rm -rf "$BACKUP_DIR$last_backup"
    echo "Delete old backup"
fi