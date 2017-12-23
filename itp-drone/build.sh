#!/bin/zsh

{
	cat "$TAMPIO_HOME"/itp.js
	cat drooni.js
	python3 "$TAMPIO_HOME"/tampio.py main.itp
	echo "aloittaa_();"
} >main.js
