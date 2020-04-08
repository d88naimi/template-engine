# template-engine

Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

## start:

add_manager

## new_team_member: ask user for next teammate

possible responses include: - engineer - intern - no more
if engineer
call add_engineer
else if intern
call add_intern
else if none
call render html with employees array

## add_manager: prompt for manager details

- name
- id
- office number
- this function will prompt user for manager info
- creates new manager object
- pushes to employees
- call new_team_member

## add_engineer: prompt for engineer details

- this function will prompt user for engineer info
- creates new engineer object
- pushes to employees
- call new_team_member

## add_intern: prompt for engineer details

- this function will prompt user for intern info
- creates new intern object
- pushes to employees
- call new_team_member
