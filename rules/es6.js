module.exports = {
    'rules': {
        'arrow-body-style'        : 0,
        'arrow-parens'            : 0,
        'arrow-spacing'           : 0,
        'constructor-super'       : 2,
        'generator-star-spacing'  : 0,
        'no-class-assign'         : 2,
        'no-confusing-arrow'      : ['error', {
                                        allowParens: true,
                                    }],
        'no-const-assign'         : 2,
        'no-dupe-class-members'   : 2,
        'no-duplicate-imports'    : 2,
        'no-new-symbol'           : 2,
        'no-restricted-imports'   : 0,
        'no-this-before-super'    : 2,
        'no-useless-computed-key' : 1,
        'no-useless-constructor'  : 1,
        'no-useless-rename'       : ['error', {
                                        ignoreDestructuring: false,
                                        ignoreImport: false,
                                        ignoreExport: false,
                                    }],
        'no-var'                  : 1,
        'object-shorthand'        : [1, 'always', {
                                        ignoreConstructors: false,
                                        avoidQuotes: true,
                                    }],
        'prefer-arrow-callback'   : [1,{
                                        allowNamedFunctions:true
                                    }],
        'prefer-const'            : [1,{
                                        destructuring: 'any',
                                        ignoreReadBeforeAssign: true
                                    }],
        'prefer-destructuring'    : 0,
        'prefer-numeric-literals' : 1,
        'prefer-rest-params'      : 0,
        'prefer-spread'           : 1,
        'prefer-template'         : 0,
        'require-yield'           : 0,
        'rest-spread-spacing'     : 0,
        'sort-imports'            : 0,
        'symbol-description'      : 0,
        'template-curly-spacing'  : 0,
        'yield-star-spacing'      : 0
    }
};