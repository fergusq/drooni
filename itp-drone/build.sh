#!/bin/zsh

INPUT="$1"
OUTPUT="$2"
shift 2

{
	cat "$TAMPIO_HOME"/itp.js
	cat "$@"
	python3 "$TAMPIO_HOME"/tampio.py "$INPUT"
	echo "aloittaa_();"
} >"$OUTPUT"
