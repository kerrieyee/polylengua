# Polylengua
# README

This is mostly a personal project to study Spanish verb conjugations that I have trouble with.  I'm using https://github.com/ghidinelli/fred-jehle-spanish-verbs to seed the conjugation data.

To view current implementation: www.polylengua.com

## TODO:
- allow creation of lists
- add auth0

## Technology used
- React with hooks
- Rails w/Postgres database

## Callouts
- Originally implemented in mysql.  However free tier only allowed a certain amount of writes per hour.  So I batch inserted data for study sessions.
- Next switched to postgres because mysql in heroku is slightly painful and the heroku postgres free tier is a little clearer on its limitations of 10,000 rows.
