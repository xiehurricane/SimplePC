function loadComponent(module) {
  return lazyLoadComponent(module);
}

// 服务端渲染用这个
export function loadComponentDireact(module) {
  // console.log('____module:',module);
  return (location, cb) => cb(null, module);
}

/**
 * 懒加载单个组件
 * @param  {[type]} lazyModule [description]
 * @return {[type]}            [description]
 */
export function lazyLoadComponent(lazyModule) {
  return (location, cb) => {
    lazyModule(module => {
      cb(null, module)
    })
  }
}

/**
 * 懒加载多个组件
 * @param  {[type]} lazyModules [description]
 * @return {[type]}             [description]
 */
export function lazyLoadComponents(lazyModules) {
  return (location, cb) => {
    const moduleKeys = Object.keys(lazyModules);
    const promises = moduleKeys.map(key =>
      new Promise(resolve => lazyModules[key](resolve))
    )

    Promise.all(promises).then(modules => {
      cb(null, modules.reduce((obj, module, i) => {
        obj[moduleKeys[i]] = module
        return obj
      }, {}))
    })
  }
}
