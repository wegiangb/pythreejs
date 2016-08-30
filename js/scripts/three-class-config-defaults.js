module.exports = {

    // viewName: className + "View",
    // modelName: className + "Model",

    viewSuperClass: 'ThreeView',
    modelSuperClass: 'ThreeModel',
    pySuperClass: 'Widget',

    // pySuperModulePath: './core/Object3D',
    // pySuperclass: 'Object3D',

    superDepModuleName: 'base',
    superDepModulePath: './_base',

    // properties
    properties: {
        // objPropName: {
        //     defaultValue: 100,
        //     propertyType: 'scalar/array/enum/child',
        //     traitletType: 'CInt(%%default%%)'
        //     traitletType: 'List(Instance(Object3D))'
        // }
    },

    // ordered list of string names of attributes required by constructor
    constructorArgs: [
        // e.g.: [ 'position', 'scale', 'rotation' ]
    ],


}
