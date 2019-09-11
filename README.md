Plastering Deployment
=========================

# Getting Started
- All the following steps are done in Ubuntu 18.04, they are not tested in other environments.
- Make sure you have git and ansible installed, if not run ``sudo apt install ansible git``
- ``git clone <this repo>``
- ``cd <cloned folder>``
- Make sure sudo command doesn't need password
- ``ansible-playbook plaster.yml -k``
- If you want to run it step by step, do ``ansible-playbook plaster.yml --step``
- If you want to run it from a particular task, do do ``ansible-playbook plaster.yml --start-at-task "name of task"``
- When it's running, first enter the current user of your machine, e.g. Sammy
- Then, enter the location of cert and key files for ssl. e.g. /path/to/cert/file/cert_file_name.pem
- Enter your username and password to clone the latest version of plaster
- Then it's done
