'use strict'

const ObjectFactory = require( 'nof' )

const NumericFactory = opts => {
  const isInteger = !!opts.isInteger
  
  const propertyTransform = ( name, value ) => {
    const num = Number( value )
    
    return isInteger ? Math.trunc( num ) : num
  }
  
  const options = Object.assign( {}, opts, { propertyTransform } )
  
  return ObjectFactory( options )
}

module.exports = NumericFactory
