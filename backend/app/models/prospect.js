/**
 * Modelo de la tabla de prospectos
 * @author jaimecastrillon@gmail.com
 */

module.exports = (sequelize, DataTypes) => sequelize.define('prospects', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(80),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'nombre es requerido'
                },
                len: {
                    args: [3, 100],
                    msg: "nombre debe tener mínimo 3 y máximo 80 caracteres"
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("nombre no debe estar vacío");
                    }
                },
            }
        },
        tradeName: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'teléfono es requerido'
                },
                len: {
                    args: [7, 20],
                    msg: "teléfono debe tener mínimo 7 y máximo 20 caracteres"
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("nombre no debe estar vacío");
                    }
                },
            }
        },
        email: {
            type: DataTypes.STRING(250),
            allowNull: false,
            validate: {
                isEmail: {
                    args: true,
                    msg: "correo electrónico no es válido"
                },
                notNull: {
                    msg: 'correo electrónico es requerido'
                },
                len: {
                    args: [7, 250],
                    msg: "correo electrónico debe tener mínimo 7 y máximo 20 caracteres"
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("correo electrónico no debe estar vacío");
                    }
                },
            }
        },
        address: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'dirección electrónico es requerida'
                },
                len: {
                    args: [10, 100],
                    msg: "dirección debe tener mínimo 10 y máximo 100 caracteres"
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("dirección no debe estar vacía");
                    }
                },
            }
        },
        idCity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'ciudad es requerida'
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("ciudad no debe estar vacía");
                    } else if (isNaN(value)) {
                        throw new Error("ciudad debe ser numérica");
                    }
                },
            }
        },
        location: {
            type: DataTypes.JSON,
            defaultValue: {},
        },
        supplier: {
            type: DataTypes.STRING(60),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'proveedor actual es requerido'
                },
                len: {
                    args: [5, 60],
                    msg: "proveedor actual debe tener mínimo 5 y máximo 60 caracteres"
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("proveedor actual no debe estar vacío");
                    }
                },
            }
        },
        installedCapacity: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: {},
            validate: {
                notNull: {
                    msg: 'capacidad instalada es requerida'
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("capacidad instalada no debe estar vacía");
                    }
                },
            }
        },
        monthlyVolume: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'volumen mensual es requerido'
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("volumen mensual no debe estar vacío");
                    } else if (isNaN(value)) {
                        throw new Error("volumen mensual debe ser numérico");
                    }
                },
            }
        },
        observations: {
            type: DataTypes.STRING(250),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'observaciones es requerido'
                },
                len: {
                    args: [5, 250],
                    msg: "observaciones debe tener mínimo 5 y máximo 250 caracteres"
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("observaciones no debe estar vacío");
                    }
                },
            }
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    },
    {
        underscored: true,
        timestamps: true,
    }
);
