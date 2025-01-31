const env = process.env.NODE_ENV || 'development'; 

let name;

if(env == 'production') {
    name = 'GDFdrgsPRO'
} else if(env == 'staging') {
    name = 'HUJGsTajhs'
} else {
    name = 'KJHCXVJsdv'
}

module.exports = require(`./grants/${name}.js`);
