const path = require('path')

module.exports = {
  webpack: (config) => {
    // exclude getlinks-ui from babel transpile
    config.module.rules.forEach(function(rule) {
      if (!(rule.exclude instanceof Array) && typeof rule.exclude != "undefined") {
        rule.exclude = [rule.exclude]
      }
      rule.exclude = rule.exclude || []
      rule.exclude.push(path.resolve(__dirname, './components/getlinks-ui'))
    })
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    console.log(config.module.rules)
    return config
  }
}
