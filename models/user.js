const db = require('../db')
const { Sequelize, DataTypes, Model } = require('sequelize');

class User extends Model {
    static classLevelMethod() {
        return 'foo';
    }
    instanceLevelMethod() {
        return 'bar';
    }
    getFullname() {
        return [this.firstname, this.lastname].join(' ');
    }
}

User.init({
    firstname: DataTypes.TEXT,
    lastname: DataTypes.TEXT,
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    email: DataTypes.STRING,
    bio: DataTypes.TEXT,
}, {
    sequelize: db, 
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
});


module.exports = User