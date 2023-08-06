FROM ubuntu:latest
LABEL authors="owada"

ENTRYPOINT ["top", "-b"]
