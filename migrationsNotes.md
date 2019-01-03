REMBER THAT YOU MUST BE IN THE `db` FOLDER BEFORE RUNNING ANY OF THESE COMMANDS

#Create New Migration
sequelize migration:generate --name [migration-name]

#Running Migrations
sequelize db:migrate

#Creating New Seeds
sequelize seed:generate --name [seed-name]

#Running Seeds
##All Seeds
sequelize db:seed:all
##Specific Seeds
sequelize db:seed --seed [seedNumber]-[seedname]