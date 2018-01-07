#!/bin/zsh

function usage() {
	echo "usage: ./build.sh [-o <out-js-file>] [<in-itp-file>]"
	echo "Input/output is by default stdin/stdout."
}

if [ -z "$TAMPIO_HOME" ]; then
	echo "TAMPIO_HOME is empty! Please set it before using this script."
	exit 1
fi >&2

OUT="/dev/stdout"
IN="/dev/stdin"

while [ "$#" -gt 0 ]; do
	case "$1" in
		(-h|--help) usage; exit 0 ;;
		(-o) shift; OUT="$1" ;;
		(-*) { echo "Unknown option $1"; usage } >&2; exit 0 ;;
		(*) IN="$1" ;;
	esac
	shift
done

{
	python3 "$TAMPIO_HOME"/tampio.py -i "$IN"
	echo "aloittaa_();"
} >"$OUT"
