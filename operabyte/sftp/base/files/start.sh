#!/bin/bash

echo "Add SFTP user..."

adduser $SFTP_USER

echo "$SFTP_USER:$SFTP_PASSWORD" | chpasswd

echo "Create SFTP user directories..."

for directory in ${SFTP_DIRECTORIES//,/ }; do
  mkdir -p "/home/$SFTP_USER/$directory"
  chown $SFTP_USER "/home/$SFTP_USER/$directory"
done

echo "Install sshd..."

apk add --no-cache openssh

echo "Start sshd..."

/usr/sbin/sshd -D
