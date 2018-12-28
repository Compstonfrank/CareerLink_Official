#DOCS 
https://sequelize.readthedocs.io/en/latest/docs/migrations/
http://docs.sequelizejs.com/manual/tutorial/migrations.html

#Create New Migration
sequelize migration:generate --name [migration-name]

#Running Migrations
##REMEMBER TO DO THIS FROM THE DB FILE
sequelize db:migrate