#!/bin/zsh

# Apufunktio title

function title() {
	str="$1"
	printf "///"
	printf "/%.0s" {1..${#str}}
	echo "///"
	echo "// $str //"
	printf "///"
	printf "/%.0s" {1..${#str}}
	echo "///"
}

# Varsinainen skripti

function usage() {
	echo "usage: ./build.sh <out-file> <in-files>"
	echo "in-files must be either .js or .itp files"
}

if [ -z "$TAMPIO_HOME" ]; then
	echo "TAMPIO_HOME is empty! Please set it before using this script."
	exit 1
fi >&2

IN_ITP=()
IN_JS=()
OUT="$1"
shift

case "$OUT" in
	(-h|--help) usage; exit 0 ;;
esac

while [ "$#" -gt 0 ]; do
	case "$1" in
		(*.itp)	IN_ITP+="$1" ;;
		(*.js) IN_JS+="$1" ;;
		(*) echo "Illegal argument, expected .itp or .js" >&2; usage >&2; exit 1;;
	esac
	shift
done

{
	cat "$TAMPIO_HOME"/itp.js
	cat "${IN_JS[@]}"
	for file in $IN_ITP; do
		title "$file"
		python3 "$TAMPIO_HOME"/tampio.py "$file"
	done
	echo "aloittaa_();"
} >"$OUT"
