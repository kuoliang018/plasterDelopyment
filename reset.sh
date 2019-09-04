#!/usr/bin/env bash

cd plastering-api
../myprojectenv/bin/python setup.py install
cd ..
sudo service myproject restart

